import React from 'react';
import { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

export default CreateArea;

function CreateArea(props) {
  const [note, setNote] = useState({title: "", content: ""});
  const [startTakingNote, setStartTakingNote] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setNote(prevValue => {
      return {...prevValue, [name]: value};
    });
  }

  const handleAddClick = (event) => {
    props.onAdd(note);
    setNote({title: "", content: ""});
    setStartTakingNote(prevValue => !prevValue);
    event.preventDefault();
  }

  function handleClick() {
    setStartTakingNote(prevValue => !prevValue);
  }

  return (
    <div>
      <form className="create-note">
        {startTakingNote && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />}
        <textarea onClick={handleClick} onChange={handleChange} name="content" placeholder="Take a note..." rows={startTakingNote ? "3" : "1"} value={note.content} />
        {startTakingNote && <Zoom in={true}>
          <Fab onClick={handleAddClick}><AddCircleIcon></AddCircleIcon></Fab>
        </Zoom>}
      </form>
    </div>
  );
}