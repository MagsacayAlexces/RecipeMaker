// src/api.js (Frontend)
import axios from 'axios';

// This function uploads the image to the backend server
const uploadImage = async (imageFile) => {
  const formData = new FormData(); // FormData is used to handle files in HTTP requests
  formData.append('image', imageFile); // Attach the image file with the name 'image'

  try {
    // Send the image file to the backend URL (adjust the URL as needed)
    const response = await axios.post('http://localhost:5000/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }, // Set the header for file upload
    });
    return response.data; // Return the response (recipe suggestions)
  } catch (error) {
    console.error('Error uploading image:', error);
  }
};

export { uploadImage };
