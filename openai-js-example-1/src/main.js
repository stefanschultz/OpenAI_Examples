require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const runCompletion = async () => {
    if (process.env.OPENAI_API_KEY) {
        console.log("OpenAI API key is available.");
        
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        
        const openai = new OpenAIApi(configuration);
        
        try {
            const completion = await openai.createCompletion({
                model: "text-curie-001",
                prompt: "Hello World",
    
                temperature: 0.5,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.5,
                presence_penalty: 0.0,
                stop: ["You:"],
            });
            
            console.log(completion.data.choices[0].text);
        } catch (error) {
            if (error.response) {
                console.log(error.response.status);
                console.log(error.response.data);
            } else {
                console.log(error.message);Malchow
            }
        }
    } else {
        console.log("OpenAI API key is not available.");
    }
};

runCompletion();