import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const plusBtn = () => {
    setShowAnswer(true);
  };

  const minusBtn = () => {
    setShowAnswer(false);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        {!showAnswer && (
          <button className="btn" onClick={plusBtn}>
            {' '}
            <AiOutlinePlus />
          </button>
        )}
        {showAnswer && (
          <button className="btn" onClick={minusBtn}>
            {' '}
            <AiOutlineMinus />
          </button>
        )}
      </header>
      {showAnswer && <p>{info}</p>}
    </article>
  );
};

export default Question;
