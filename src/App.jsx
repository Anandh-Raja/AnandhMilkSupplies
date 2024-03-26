import React, { useState } from 'react';
import './App.css';

function App() {
  const [days, setDays] = useState(0);
  const [litersPerDay, setLitersPerDay] = useState(0);

  const milkPricePerLiter = 45; // Price per liter of milk

  const calculateTotalPrice = () => {
    const totalLiters = days * litersPerDay;
    const totalPrice = totalLiters * milkPricePerLiter;
    return totalPrice;
  };

  return (
    <>
      <h1>ஆனந்த் மில்க் சப்ளைஸ்</h1>
      <div className="card">
        <div>
          <label htmlFor="days">மாதத்தில் நாட்கள்:</label>
          <input
            type="number"
            id="days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="litersPerDay">ஒரு நாளில் பயன்படுத்தப்படும் லிட்டர்:</label>
          <input
            type="number"
            id="litersPerDay"
            value={litersPerDay}
            onChange={(e) => setLitersPerDay(e.target.value)}
          />
        </div>
        <div>
          <label>மாதத்தின் மொத்த பால் விலை:</label>
          <span>₹{calculateTotalPrice()}</span>
        </div>
      </div>
      <p className="read-the-docs">
        மாதத்தின் நாட்கள் மற்றும் ஒரு நாளில் பயன்படுத்தப்படும் லிட்டரை மாற்றி முழு மாத பால் விலையை கணிக்க அமைத்துக்கொள்க.
      </p>
    </>
  );
}

export default App;
