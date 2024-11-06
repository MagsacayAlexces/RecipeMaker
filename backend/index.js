// backend/index.js
const express = require('express');
const cors = require('cors');
const multer = require('multer'); // multer handles file uploads in Node.js
const { getRecipeSuggestions } = require('./aiClient'); // Assuming we have an AI function

const app = express();
const PORT = 5000;

app.use(cors());

// Configure multer for image upload
const upload = multer({ dest: 'uploads/' }); // Images are stored in the 'uploads' folder

// Route to handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const imagePath = req.file.path; // Access the uploaded image path
    const recipes = await getRecipeSuggestions(imagePath); // Process the image with AI
    res.json(recipes); // Send the recipes back to the frontend
  } catch (error) {
    console.error('Error generating recipes:', error);
    res.status(500).json({ error: 'Failed to generate recipes' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
