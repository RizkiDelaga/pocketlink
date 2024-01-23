import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS untuk tema snow
import 'react-quill/dist/quill.bubble.css'; // Import CSS untuk tema bubble
import { Box, Button, Container, Paper } from '@mui/material';
import axios from 'axios';

function Quill2() {
  const [text2, setText2] = useState('');
  const [showTools, setShowTools] = useState({
    textStyle: true,
    textFormat: true,
    paragraphFormat: false,
    list: false,
    color: false,
    media: false,
    others: false,
    clear: true,
  });

  const modules = {
    toolbar: [
      [{ font: [] }], // font family
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons and text direction
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
    'link',
    'image',
    'code-block',
    'formula',
    'video',
    'link',
    'image',
    'video',
  ];

  const quillRef = React.createRef();

  return (
    <div className="quill">
      <h1>Quill 2</h1>
      <Container>
        Show Tools:
        <Button
          variant="outlined"
          size="small"
          onClick={() => setShowTools({ ...showTools, textStyle: !showTools.textStyle })}
        >
          Text Style
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          Text Format
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          Paragraph Format
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          List
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          Color
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          Media
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          Others
        </Button>
        <Button variant="outlined" size="small" onClick={() => {}}>
          Clear Formatting
        </Button>
        <Paper>
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={text2}
            onChange={setText2}
            modules={modules}
            formats={formats}
            placeholder="Tulis sesuatu..."
          />
        </Paper>
      </Container>
    </div>
  );
}

export default Quill2;
