
import express from 'express'
import { userControlar } from './user.controlar'
const router = express.Router()

router.post('/create-student', userControlar.createStudnet)

export const UserRoute = router