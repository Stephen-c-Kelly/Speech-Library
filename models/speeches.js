import mongoose from 'mongoose'

const Schema = mongoose.Schema

const speechSchema = new Schema({
  title: { type: String },
  date: { type: Date, default: Date.now },
  image: { type: String },
  recording: { type: String },
  text: { type: String, required: true},
  speakerFirstName: { type: String, required: true},
  speakerLastName: { type: String, required: true},
  comments: [{ type: Object }],
  
});

const userSchema = new Users ({

})

const commentSchema = new Comment ({

})

// need to add schema for users and comments

const Speech = mongoose.model('Speech', speechSchema,)

export {
  Speech
}