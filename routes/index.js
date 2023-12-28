import { Router } from 'express';

const router = Router()

router.get('/', function(req, res){
  res.json({
    message: 'Welcome to the Speech Analysis blog'
  })
})

export default router

