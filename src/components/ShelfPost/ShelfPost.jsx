
import { useState } from 'react';
import { useDispatch } from 'react-redux';
export default function ShelfPost() {
  const [newItem, setNewItem] = useState('');
  const [newImgUrl, setNewImgUrl] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newItem, newImgUrl);


    dispatch({type:'POST_SHELF', payload:{newItem, newImgUrl}})

  };
  return (
    <form onSubmit={handleSubmit}>
      <span>Shelf item to add :</span>
      <input
        value={newItem}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <span>URL of image :</span>
      <input
        value={newImgUrl}
        onChange={(event) => setNewImgUrl(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}