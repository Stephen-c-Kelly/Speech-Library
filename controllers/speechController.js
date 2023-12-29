import { Speech } from '../models/speeches.js'

const getSpeech = async () => {
  try {

  } catch (error) {
    throw (error);
  }
}

const getSpeechById = async () => {
  try {

  } catch (error) {
    throw (error);
  }
}


const createSpeech = async (req, res) => {
  console.log(`received data;`, req.body)
  try {
    const payload = req.body
    payload.id = await Speech.countDocuments({})+1
    const newSpeechItem = new Speech(payload)
    const savedSpeech = await newSpeechItem.save()
    res.status(201).json(savedSpeech);

  } catch (error) {
    console.log('there was an error:', error)
    res.status(500).send(`an error occured in the creation of this speech in the database.`)
  }
}

const updateSpeech = async () => {
  try {

  } catch (error) {
    throw (error);
  }
}

const deleteSpeech = async () => {
  try {

  } catch (error) {
    throw (error);
  }
}

export {
  getSpeech,
  getSpeechById,
  createSpeech,
  updateSpeech,
  deleteSpeech
}