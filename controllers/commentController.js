import { Comment } from '../models/comments.js'

const createComment = async (req, res) => {
  try {
    console.log(`start of create comment`)
    const id = req.params.speechId
    const payload = req.body
    payload.speechId = id
    console.log(`req body from create is:`, req.body, `and id of speech is`, id )
    const newCommentItem = new Comment(payload)
    const savedComment = await newCommentItem.save()
    res.status(201).json(savedComment);
  } catch (error) {
      res.status(500).send({ message: "Error creating comment", error: error.message });
  }
}

const getCommentBySpeechId = async (req, res) => {
  try {
    console.log(`start of get comments from speech Id`)
    const id = req.params.speechId
    const comments = await Comment.find({speechId : id}, 'name date text')
    res.json(comments)
  } catch (error) {
      res.status(500).send({ message: "Error retrieving comment", error: error.message });
  }
}

const updateComment = async (req, res) => {
  try {
      // Your logic to update a comment
  } catch (error) {
      res.status(500).send({ message: "Error updating comment", error: error.message });
  }
}

const deleteComment = async (req, res) => {
  try {
      // Your logic to delete a comment
  } catch (error) {
      res.status(500).send({ message: "Error deleting comment", error: error.message });
  }
}

export {
  createComment,
  getCommentBySpeechId,
  updateComment,
  deleteComment
}