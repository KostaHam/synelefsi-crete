import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const App = () => {
  const names = [
    'Amelie',
    'Ben',
    'Clara',
    'David',
    'Emilia',
    'Felix',
    'Greta',
    'Hannah',
    'Isabelle',
    'Jonas',
  ];

  const [numbers, setNumbers] = useState<string[]>(Array(names.length).fill(''));
  const [total, setTotal] = useState<number>(0);

  const handleNumberChange = (index: number, value: string) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
  };

  useEffect(() => {
    const sum = numbers.reduce((acc, current) => {
      const num = Number(current);
      return acc + (isNaN(num) ? 0 : num);
    }, 0);
    setTotal(sum);
  }, [numbers]);

  return (
    <div className="container">
      <header>
        <h1>ΚΑΤΑΜΕΤΡΙΣΗ ΣΥΝΕΛΕΥΣΗ 2026</h1>
        <p>Die Gesamtsumme wird automatisch aktualisiert, während Sie Zahlen eingeben.</p>
      </header>
      <main>
        <ul className="name-list" aria-label="Liste von Namen und Zahleneingaben">
          {names.map((name, index) => (
            <li key={index} className="name-item">
              <label htmlFor={`number-input-${index}`} className="name-label">{name}</label>
              <input
                id={`number-input-${index}`}
                type="number"
                className="number-input"
                value={numbers[index]}
                onChange={(e) => handleNumberChange(index, e.target.value)}
                placeholder="0"
                aria-label={`Zahl für ${name}`}
              />
            </li>
          ))}
        </ul>
        <div className="result-container" aria-live="polite">
          <h2>Gesamtsumme: <span className="total-sum">{total}</span></h2>
        </div>
      </main>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
