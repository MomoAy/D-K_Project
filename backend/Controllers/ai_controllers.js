import asyncHandler from "express-async-handler";
import { api, systemPrompt, userPrompt } from "../Config/ai.js";
import OpenAI from "openai";
const client = new OpenAI();

export const aiAnswer = asyncHandler(async (req, res) => {
  const { goal } = req.body;

  if (goal === "" || !goal) {
    res.status(400);
    throw new Error("Bon on a qu'à imaginez l'obkectif pour toi non ? ");
  }

  const userPrt = userPrompt + goal;

    // const completion = await api.chat.completions.create({
    //   model: "mistralai/Mistral-7B-Instruct-v0.2",
    //   messages: [
    //     // {
    //     //   role: "system",
    //     //   content: systemPrompt,
    //     // },
    //     {
    //       role: "user",
    //       content: userPrt,
    //     },
    //   ],
    //   // temperature: 0.7,
    //   // max_tokens: 256,
    // });

    const completion = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: "Write a one-sentence bedtime story about a unicorn.",
        },
      ],
    });

    const response = completion.choices[0].message;

    if (!response) {
      res.status(400);
      throw new Error("Quelque chose n'a pas marché");
    }

    const tasks = response.split("\n").filter((task) => task.trim() !== "");
    res.status(200).json(tasks);


});




