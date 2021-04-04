import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

export default Note;

function Note(props) {

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteClick}><DeleteIcon></DeleteIcon></button>
    </div>
  );
}