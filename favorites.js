import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Your Favorite Recipes</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {favorites.map((meal) => (
            <div key={meal.idMeal} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
              <img src={meal.strMealThumb} alt={meal.strMeal} width={150} />
              <h3>{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;