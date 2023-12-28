
import mongoose from 'mongoose'

const Schema = mongoose.Schema


// need to add schema for users 
const userSchema = new Users ({

})


const Users = mongoose.model('Users', userSchema,)

export {
  User
}