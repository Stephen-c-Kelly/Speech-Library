
import mongoose from 'mongoose'

const Schema = mongoose.Schema

// need to add schema for comments 
const commentSchema = new Schema ({
    date: { type: Date, default: Date.now },
    text: { type: String, required: true },
    name: { type: String, required: true },
    speechId: { type: String, required: true }
})

const Comment = mongoose.model('Comment', commentSchema,)

export {
  Comment
}