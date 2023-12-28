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

const createSpeech = async (payload) => {
  try {
    payload.id = await Speech.countDocuments({})+1
    const newSpeechItem = new Speech(payload)
    return await newSpeechItem.save()
    
  } catch (error) {
    throw (error);
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