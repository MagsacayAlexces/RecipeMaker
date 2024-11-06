// src/components/ImageUploader.js
import React, { useState } from 'react';
import { uploadImage } from '../api';

const ImageUploader = () => {
  const [recipeSuggestions, setRecipeSuggestions] = useState([]);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const recipes = await uploadImage(file); // Call uploadImage and wait for recipe data
      setRecipeSuggestions(recipes); // Store the recipe data in the state to display
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <div>
        <h3>Recipe Suggestions</h3>
        {recipeSuggestions.map((recipe, index) => (
          <p key={index}>{recipe}</p>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
