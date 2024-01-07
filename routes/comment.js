import { Router } from 'express';

const router = Router() 

// Import controller functions that can be passed as an argument into the router
// 
import { createComment, getCommentBySpeechId, updateComment, deleteComment } from '../controllers/commentController.js' 

// /api/comment
router.post ('/:speechId', createComment)
// only works with a path like http://localhost:3000/api/comment/658e49284e0cb804d1124cc6

//displays all comments for that Speech ID
router.get ('/:speechId', getCommentBySpeechId)

router.put('/:commentId', updateComment)
//uncldear if this takes a commentId or a speech/id

router.delete('/:commentId', deleteComment)

export default router