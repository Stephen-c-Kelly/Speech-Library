import { Router } from 'express';

const router = Router() 

// Import controller functions that can be passed as an argument into the router
// 
import { getCommentById, createComment, updateComment, deleteComment } from '../controllers/commentController.js' 

// /api/comment
router.post ('/', createComment)

//displays all comments for that Speech ID
router.get ('/:speechId', getCommentById)

router.put('/:commentId', updateComment)
//uncldear if this takes a commentId or a speech/id

router.delete('/:commentId', deleteComment)

export default router