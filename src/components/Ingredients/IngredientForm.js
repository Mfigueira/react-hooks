import React, { useState } from 'react';
import { Card } from '../UI/Card';
import { LoadingIndicator } from '../UI/LoadingIndicator';
import './IngredientForm.css';

export const IngredientForm = React.memo(({ loading, onAddIngredient }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  console.log('RENDERING INGREDIENT FORM');

  const submitHandler = e => {
    e.preventDefault();
    onAddIngredient({ title: enteredTitle, amount: enteredAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={enteredTitle}
              onChange={e => setEnteredTitle(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={enteredAmount}
              onChange={e => setEnteredAmount(e.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});
