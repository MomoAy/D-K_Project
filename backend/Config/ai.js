import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const baseURL = "https://api.aimlapi.com/v1";

const apiKey = process.env.AIML_API_KEY;

export const api = new OpenAI({
  apiKey,
  baseURL,
});


export const systemPrompt =
  "Tu es un assistant qui génère des tâches basées sur un objectif donné.";

export const userPrompt = "Génère une liste de tâche pour : ";