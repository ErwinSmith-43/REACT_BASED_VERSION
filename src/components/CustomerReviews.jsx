import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Alice",
    rating: 5,
    comment: "Amazing product! Highly recommend.",
    date: "2025-12-05"
  },
  {
    id: 2,
    name: "Bob",
    rating: 4,
    comment: "Very good, but could use some improvements.",
    date: "2025-12-07"
  },
  // add more sample reviews
];

function CustomerReviews() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Customer Reviews</h2>
      {reviews.map(r => (
        <div key={r.id} style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '15px', 
            marginBottom: '15px' 
          }}>
          <h4>{r.name} — {Array(r.rating).fill("⭐").join("")}</h4>
          <p><em>{r.date}</em></p>
          <p>{r.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerReviews;
