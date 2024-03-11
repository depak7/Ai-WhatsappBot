# Ai-whatsapp-bot

This project implements an AI-powered WhatsApp bot using Twilio, Ngrok, and the Gemini development API. The bot is capable of providing intelligent responses to user queries sent via WhatsApp.

## Setup

1. **Store Twilio Credentials:**
   - Create a `.env` file in the root directory of the project.
   - Store your Twilio Account SID and Auth Token in the `.env` file.

2. **Ngrok Configuration:**
   - Install Ngrok  if you haven't already: `npm install ngrok`
   - Run Ngrok to forward the webhook to your local environment.

3. **Gemini Development API:**
   - Obtain an API key for the Gemini development API from Google.
   - Store your Gemini API key in the `.env` file.

## Usage

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Run Ngrok: `ngrok http 3000`
4. Configure Twilio with the Ngrok URL.
5. Test the bot by sending a message to your WhatsApp Sandbox number.
