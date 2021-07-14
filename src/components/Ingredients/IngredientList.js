import React from 'react';
import './IngredientList.css';

export const IngredientList = ({ ingredients, onRemoveItem }) => {
  console.log('RENDERING INGREDIENTLIST');

  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {ingredients.map(ing => (
          <li key={ing.id} onClick={onRemoveItem.bind(this, ing.id)}>
            <span>{ing.title}</span>
            <span>{ing.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
