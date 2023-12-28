import express from 'express' 
const router = express.Router() 

// Import controller functions that can be passed as an argument into the router
// 
import { getSpeech, getSpeechById, createSpeech, updateSpeech, deleteSpeech } from '../controllers/speechController.js' 

//no payload. Read links to all Speeches
router.get('/', getSpeech)

//no payload, but takes ID. Read one speech
router.get ('/:speechId', getSpeechById)

router.post ('/', createSpeech)

router.put('/;speechId', updateSpeech)

router.delete('/;speechId', deleteSpeech)

export default router