import React, { useState } from 'react';
import AddNote from './AddNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  };
  const removeNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, ind) => ind !== id);
    });
  };
  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map(({ title, content }, ind) => (
        <Note
          id={ind}
          key={ind}
          title={title}
          content={content}
          onRemove={removeNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
