import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({ title, content, id, onRemove }) => {
  return (
    <div className="note" id={id}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onRemove(id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
