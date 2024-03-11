const express=require('express')
const app=express();
const { GoogleGenerativeAI}=require('@google/generative-ai')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv=require('dotenv')
dotenv.config({ path: 'twilio.env' });


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log(accountSid);

const client = require('twilio')(accountSid, authToken);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);


async function run(chatMsg) {
  try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = chatMsg.trim();
      const result = await model.generateContent(prompt, { maxTokens: 50 });
      const response = await result.response;
      const text = response.text();
      console.log(text);
      if (text) {
          await client.messages.create({
              body: text,
              from: 'whatsapp:+14155238886',
              to: 'whatsapp:+919751577309'
          });
          console.log("Message sent successfully:", text);
      }
  } catch (error) {
      console.error("Error occurred:", error);
  }
}
  

app.post('/', async (req, res) => {
  try {
      const { body } = req;
      const msg=body.Body;
      console.log("Received message:", chatMsg);
      await run(msg);
      res.status(200).send("Message processed successfully.");
  } catch (error) {
      console.error("Error occurred while processing message:", error);
      res.status(500).send("Internal server error occurred.");
  }
});

 
   app.listen(3000,()=>{
    console.log("server Started");
   })
   