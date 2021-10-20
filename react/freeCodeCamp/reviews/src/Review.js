import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextReview = () => {
    if (index === people.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  const prevReview = () => {
    if (index === 0) {
      return setIndex(3);
    }
    setIndex(index - 1);
  };

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * 4);
    while (index === randomIndex) {
      randomIndex = Math.floor(Math.random() * 4);
    }
    setIndex(randomIndex);
  };

  return (
    <section className="container">
      <div className="title">
        <h2>our reviews</h2>
        <div className="underline"></div>
      </div>

      <article className="review">
        <div className="img-container">
          <img className="person-img" src={image} alt={name} />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <FaChevronLeft className="prev-btn" onClick={prevReview} />
          <FaChevronRight className="next-btn" onClick={nextReview} />
        </div>
        <button className="random-btn" onClick={randomReview}>
          suprise me
        </button>
      </article>
    </section>
  );
};

export default Review;
