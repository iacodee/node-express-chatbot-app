import express from 'express';
import dotenv from 'dotenv'
import morgan from 'morgan'

import chatbotRoutes from './routes/chatbot.routes.js'
dotenv.config();

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

app.use(chatbotRoutes);

