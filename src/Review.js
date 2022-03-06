import React, { useState } from 'react';
import peoples from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = peoples[index];

  const nextIndex = () => {
    setIndex((current) => {
      return (checkIndex(current + 1));
    })

  }
  const prevIndex = () => {
    setIndex((current) => {

      return (checkIndex(current - 1));
    })
  }
  const randomIndex = () => {
    let randomNumber = Math.floor(Math.random() * peoples.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  }

  const checkIndex = (number) => {
    if (number > peoples.length - 1) {
      return 0;
    }
    if (number < 0) {
      return peoples.length - 1;
    }
    return number;
  }
  return (
    <article className="review">
      <div className="img-container">
        <img className='person-img' src={image} alt={text} />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className="button-container">
        <button className={`prev-btn `} onClick={prevIndex}><FaChevronLeft /></button>
        <button className={`next-btn`} onClick={nextIndex}><FaChevronRight /></button>
      </div>

      {/* random button */}

      <button className='random-btn' onClick={randomIndex}>Me Surpreenda</button>

    </article >
  )
};

export default Review;
