import React from 'react';

const Rating = ({ value, text, color }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (value >= i + 1) {
        stars.push('fas fa-star');
    } else if (value >= i + 0.5) {
        stars.push('fas fa-star-half-alt');
    } else {
        stars.push('far fa-star');
    }
  }
  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>
          <i className={star} style={{ color }}></i>
        </span>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
	color: '#FFD300',
}

export default Rating;
