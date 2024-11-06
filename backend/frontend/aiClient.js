// backend/aiClient.js
const axios = require('axios');

const apiKey = 'YOUR_GEMINI_API_KEY';
//GEMINI API KEY
const aiEndpoint = 'YOUR_AI_ENDPOINT_URL';
//ENDPOINT_URL

const getRecipeSuggestions = async (imagePath) => {
  try {
    const response = await axios.post(aiEndpoint, {
      imagePath: imagePath,
      apiKey: apiKey,
    });
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipe suggestions:', error);
    return [];
  }
};

module.exports = { getRecipeSuggestions };
