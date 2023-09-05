import {Router} from 'express'
import { home } from '../controller/chatbot.controller.js';

const router = Router()

router.get('/', home );

router.post('/chat')

export default router