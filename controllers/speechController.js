import { Speech } from '../models/speeches.js'

import {packageTextForStorage,
  unpackTextForDisplay } from '../text/format.js'

const getSpeech = async (req, res) => {
  
  try {
    const speeches = await Speech.find({}, 'title date speakerFirstName speakerLastName')
    res.json(speeches);
  } catch (error) {
    console.log('there was an error:', error)
    res.status(500).send(`an error occured in finding the title and speaker name from the database.`)
  }
}

const getSpeechById = async (req, res) => {
  try {
    const id = req.params.speechId
    
    const rawSpeech = await Speech.findById(id)
    // console.log(`speech is`, speech)
    const speech = unpackTextForDisplay(rawSpeech)
    res.status(201).json(speech);
    if (!speech) {
      return res.status(404).send('Speech not found')
    }
  } catch (error) {
    console.log('there was an error:', error)
    res.status(500).send(`error, unable to locate speech by Id.`)
  }
}

const createSpeech = async (req, res) => {
  // console.log(`received data;`, req.body)
  try {
    const rawPayload = req.body
    console.log(`req body from create is:`, req.body)
    const payload = packageTextForStorage(rawPayload)
    // payload.id = await Speech.countDocuments({})+1
    const newSpeechItem = new Speech(payload)
    const savedSpeech = await newSpeechItem.save()
    res.status(201).json(savedSpeech);

  } catch (error) {
    console.log('there was an error:', error)
    res.status(500).send(`an error occured in the creation of this speech in the database.`)
  }
}

const updateSpeech = async (req, res) => {
  try {
    const rawPayload = req.body
    const payload = packageTextForStorage(rawPayload)
    const id = req.params.speechId
    const result = await Speech.findById(id)
    // logic to look through was was submitted in payload and update necessary bits.
    for (const key in payload) {
      if (payload.hasOwnProperty(key) && result[key] !== undefined) {
        result[key] = payload[key];
      }
    }
    await result.save()
    res.status(201).json(result);
  } catch (error) {
    console.log('there was an error:', error)
    res.status(500).send(`an error occured in the updating of this speech in the database.`)
  }
}

const deleteSpeech = async (req, res) => {
  try {
    const id = req.params.speechId
    const deleteDoc = await Speech.deleteOne({_id: id})
    
    res.status(201).json(`document deleted`);
  } catch (error) {
    console.log('there was an error:', error);
    res.status(500).json({ error: "An error occurred in the deleting of this speech in the database", details: error.message })
  }
}

export {
  getSpeech,
  getSpeechById,
  createSpeech,
  updateSpeech,
  deleteSpeech
}