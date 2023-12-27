// dotenv
import 'dotenv/config.js'
import './config/database.js'

// NPM packages
import express from 'express'
import cors from 'cors'

// routers
import rootRouter from './routes/index.js'
import speechRouter from './routes/speech.js'
import userRouter from './routes/user.js'
import commentRouter from './routes/comment.js'

const app = express()
const PORT = process.env.PORT ||3000

// Middleware
app.use(express.json())
app.use(cors())

// Routes
app.use('/api', rootRouter)
app.use('/api/speech', speechRouter)
app.use('/api/user', userRouter)
app.use('/api/comment', commentRouter)

app.listen(PORT, function() {
  console.log(`App running on ${PORT}`)
})


