import express from 'express';
import authMiddleware from '../Middleware/auth_middlewares.js';
import { aiAnswer } from '../Controllers/ai_controllers.js';

const router = express.Router();

router.post("/ask-ai-for-goal", authMiddleware, aiAnswer);

export default router;