import React from 'react';
import Note from './Note';
import CreateArea from "./CreateArea";
import { useState } from 'react';

export default App;

const year = new Date().getFullYear();

function App() {
    
    const [notesArray, setNotesArray] = useState([]);

    function addNote(note) {
        setNotesArray(prevNotesArray => [...prevNotesArray, note]); // Spread operator - ...
    }

    function deleteNote(id) {
        setNotesArray((prevNotesArray) => {
            return (prevNotesArray.filter((note, index) => {
                return (index !== id);
            }));
        });
    }

    return (
      <div>
        <Heading />
        <CreateArea onAdd = {addNote} />
        {notesArray.map((note, index) => {
            return (<Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote} />);
        })}
        <Footing />
      </div>
    );
}

function Body(props) {
    return (<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>);
}

function Footing() {
    return (<footer>
        <p>Copyright {year}</p>
    </footer>);
}

function Heading() {
    return ( <header>
        <h1>Keeper</h1>
    </header> );
}
