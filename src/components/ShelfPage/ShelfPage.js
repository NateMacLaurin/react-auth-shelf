import React from 'react';
import ShelfPost from '../ShelfPost/ShelfPost.jsx'
import ShelfDisplay from '../ShelfDisplay/ShelfDisplay.jsx'

function ShelfPage() {
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ShelfDisplay />
      <ShelfPost />
    </div>
  );
}

export default ShelfPage;
