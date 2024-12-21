
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
// // }
// import React, { useState } from 'react';
// import { Editor } from 'primereact/editor';

// const RichEditor = ({ setFormData }) => {
//   const [text, setText] = useState('');

//   // Handling text change from the editor
//   const handleTextChange = (e) => {
//     const newText = e.htmlValue;
//     setText(newText); // Update local state with the new editor value
//     handleCommentChange(newText); // Update formData when text changes
//   };

//   // Handling the formData update
//   const handleCommentChange = (newValue) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       commandbox: newValue, // Update only the commandbox property
//     }));
//   };

//   return (
//     <div className="card">
//       {/* Assuming 'Editor' is a rich text editor component */}
//       <Editor
//         placeholder="comment...."
//         value={text}
//         onTextChange={handleTextChange} // Handling text change
//         style={{ height: '100px' }}
//       />
//     </div>
//   );
// };

// export default RichEditor;
import React, { useState } from 'react';
import { Editor } from 'primereact/editor';

const RichEditor = ({ setFormData }) => {
  const [text, setText] = useState('');  // Local state for the editor content

  // Handling text change from the editor
  const handleTextChange = (e) => {
    const newText = e.htmlValue; // Get the HTML content from the editor
    setText(newText); // Update local state with the new editor value
    handleCommentChange(newText); // Propagate change to the parent component
  };

  // Handling the formData update from the editor content
  const handleCommentChange = (newValue) => {
    setFormData((prevData) => ({
      ...prevData,           // Spread the previous state to keep other properties intact
      commandbox: newValue,  // Update only the commandbox property
    }));
  };

  return (
    <div className="card">
      {/* The rich text editor from PrimeReact */}
      <Editor
        placeholder="Type your command..."
        value={text}  // Bind the editor value to local state
        onTextChange={handleTextChange} // Update local state and propagate changes to parent
        style={{ height: '100px' }}  // Customize the editor's height
      />
    </div>
  );
};

export default RichEditor;

