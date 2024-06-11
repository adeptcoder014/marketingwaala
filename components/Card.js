import React from 'react';

const Card = ({ testimonial, author, position }) => {
  return (
    <div
      className="bg-custom p-6 rounded-lg shadow-md"
      style={{
        width: '70%',
        // padding: '50px',
      }}
    >
      <p className="bg-[red]" style={{  }}>{testimonial}</p>
      <p className="font-bold">{author}</p>
      <p className="text-sm text-gray-600 break-words">{position}</p>
    </div>
  );
};

export default Card;
