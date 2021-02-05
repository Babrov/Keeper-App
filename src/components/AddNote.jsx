import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const AddNote = ({ onAdd }) => {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const getVaules = (e) => {
    const { name, value } = e.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitNote = (e) => {
    if (note.title.length > 0 && note.content.length > 0) {
      onAdd(note);
      setNote({
        title: '',
        content: '',
      });
      e.preventDefault();
    } else {
      alert('Write smth!');
      e.preventDefault();
    }
  };

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            placeholder="Title"
            name="title"
            value={note.title}
            onChange={getVaules}
          />
        )}
        <textarea
          onClick={() => setExpanded(!expanded)}
          placeholder="Take a note..."
          name="content"
          value={note.content}
          onChange={getVaules}
          rows={expanded ? 3 : 1}
        />
        {expanded && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
};

export default AddNote;
