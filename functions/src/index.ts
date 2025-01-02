/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import OpenAI from "openai";
import {zodResponseFormat} from "openai/helpers/zod";
import {z} from "zod";
import "dotenv/config";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const ResponseFormat = z.object({
  response: z.array(
    z.object({
      activity: z.string(),
      address: z.string(),
      averageCost: z.string(),
    })
  ),
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateEventIdea =
  onRequest({cors: true}, async (req, res) => {
    const location: string = req.body.formData.location;
    const occasion: string = req.body.formData.occasion;
    const budget: number = req.body.formData.budget;
    const numberOfPeople: number = req.body.formData.numberOfPeople;
    const additionalDetails: string = req.body.formData.additionalDetails;
    console.log("Request Input:", {
      location,
      occasion,
      budget,
      numberOfPeople,
      additionalDetails,
    });

    const systemPrompt = `When responding, ensure your suggestions include:
    - A brief description of the activity or place.
    - An approximate address (must be real).
    - An average cost (e.g., per person or group).
    Format your response as JSON with the following structure:
    {
    "response": [
        {
        "activity": "string",
        "address": "string",
        "averageCost": "string",
        }
    ]
    }
    Be sure to include several activities in the correct location.
    `;

    const userPrompt = `Suggest activities for a ${occasion} in ${location} 
    for ${numberOfPeople} 
    people. 
    The activities should cost at most ${budget} dollars.
    Additional details: ${additionalDetails}. 
    Include addresses, average costs, and testimonials as described in the 
    system instructions.`;


    try {
      const response = await openai.beta.chat.completions.parse({
        model: "gpt-4o-mini",
        messages: [
          {
            "role": "system",
            "content": systemPrompt,
          },
          {
            "role": "user",
            "content": userPrompt,
          },
        ],
        response_format: zodResponseFormat(ResponseFormat, "ResponseFormat"),
      });
      const responseContent = response.choices[0].message.parsed;

      if (!responseContent || !responseContent.response ||
        responseContent.response.length === 0) {
        console.warn("OpenAI returned an empty or malformed response:",
          responseContent);
        res.status(200).json({
          message: "No activities generated. Please refine your input.",
          response: [],
        });
        return;
      }


      res.json(responseContent);
    } catch (error) {
      console.error("Error generating response:", error);
      res.status(500).json({error: "Failed to response"});
      logger.error(error);
    }
  });


export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});
