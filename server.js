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

// Catch 404 and forward to error handler (gpt)
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler (gpt)
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`)
})


