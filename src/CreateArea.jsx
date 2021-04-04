import React from 'react';
import { useState } from 'react';

export default CreateArea;

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote(prevValue => {
      return {...prevValue, [name]: value};
    });
  }

  const handleAddClick = (event) => {
    props.onAdd(note);
    setNote({title: "", content: ""});
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}