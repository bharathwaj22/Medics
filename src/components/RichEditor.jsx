
// import React from 'react'
// import { Editor } from "primereact/editor";
// import { useState } from 'react';

// const RichEditor = () => {
//   const [text, setText] = useState('');

//   return (
//     <div className="card">
//       <Editor placeholder='comment....' value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '100px' }} />
//     </div>
//   )
// }
import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

const RichEditor = ({ setFormData }) => {
  const [text, setText] = useState('');

  // Handling text change from the editor
  const handleTextChange = (e) => {
    const newText = e.htmlValue;
    setText(newText); // Update local state with the new editor value
    handleCommentChange(newText); // Update formData when text changes
  };

  // Handling the formData update
  const handleCommentChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,
      commandbox: newValue, // Update only the commandbox property
    }));
  };

  return (
    <div className="card">
      {/* Assuming 'Editor' is a rich text editor component */}
      <Editor
        placeholder="comment...."
        value={text}
        onTextChange={handleTextChange} // Handling text change
        style={{ height: '100px' }}
      />
    </div>
  );
};

export default RichEditor;
