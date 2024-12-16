
import React from 'react'
import { Editor } from "primereact/editor";
import { useState } from 'react';

const RichEditor = () => {
  const [text, setText] = useState('');

  return (
    <div className="card">
      <Editor placeholder='comment....' value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '200px' }} />
    </div>
  )
}

export default RichEditor