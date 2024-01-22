import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS untuk tema snow
import 'react-quill/dist/quill.bubble.css'; // Import CSS untuk tema bubble
import Parser from 'html-react-parser';
import { Button } from '@mui/material';

function Quill() {
  const [bubbleStyle, setBubbleStyle] = useState(false);
  const [readMode, setReadMode] = useState(true);
  const [text, setText] = useState(
    `<h1 class="ql-align-center">Quill Rich Text Editor</h1><p><br></p><p>Quill is a free, <a href="https://github.com/quilljs/quill/" rel="noopener noreferrer" target="_blank">open source</a> WYSIWYG editor built for the modern web. With its <a href="https://quilljs.com/docs/modules/" rel="noopener noreferrer" target="_blank">modular architecture</a> and expressive <a href="https://quilljs.com/docs/api/" rel="noopener noreferrer" target="_blank">API</a>, it is completely customizable to fit any need.</p><p><br></p><h2 class="ql-align-center">Getting Started is Easy</h2><p><br></p><pre class="ql-syntax" spellcheck="false">// &lt;link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet"&gt; // &lt;script src="https://cdn.quilljs.com/1.2.6/quill.min.js"&gt;&lt;/script&gt; var quill = new Quill('#editor', { modules: { toolbar: '#toolbar' }, theme: 'snow' }); // Open your browser's developer console to try out the API! </pre>`
  );

  const modules = {
    toolbar: [
      [{ font: [] }], // font family
      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
      ['bold', 'italic', 'underline', 'strike', { direction: 'rtl' }], // toggled buttons and text direction
      [{ header: 1 }, { header: 2 }], // custom button values
      [{ align: [] }, { list: 'ordered' }, { list: 'bullet' }], // text align and lists
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ color: [] }, { background: [] }], // dropdown with defaults
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'], // blocks
      ['clean'], // remove formatting
    ],
  };

  const formats = [
    'header',
    'font',
    'background',
    'color',
    'code',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'script',
    'align',
    'direction',
    'link',
    'image',
    'code-block',
    'formula',
    'video',
    'link',
    'image',
    'video',
  ];

  return (
    <div className="quill">
      <h1>React Quill Bubble</h1>
      {bubbleStyle === true ? null : (
        <ReactQuill
          theme="snow"
          value={text}
          onChange={setText}
          modules={modules}
          formats={formats}
          placeholder="Tulis sesuatu..."
          readOnly={readMode}
        />
      )}
      {bubbleStyle === false ? null : (
        <ReactQuill
          theme="bubble"
          value={text}
          onChange={setText}
          modules={modules}
          formats={formats}
          placeholder="Tulis sesuatu..."
          readOnly={readMode}
        />
      )}
      <Button variant="contained" onClick={() => setReadMode(!readMode)}>
        Read Mode: {readMode === true ? 'true' : 'false'}
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={() => setBubbleStyle(!bubbleStyle)}>
        Bubble Style: {bubbleStyle === true ? 'true' : 'false'}
      </Button>
      <br />
      {text}
      {Parser(text)}
    </div>
  );
}

export default Quill;
