
import mongoose from 'mongoose'

const Schema = mongoose.Schema


// need to add schema for comments 
const commentSchema = new Comment ({

})


const Comment = mongoose.model('Comment', commentSchema,)

export {
  Comment
}