import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS untuk tema snow
import 'react-quill/dist/quill.bubble.css'; // Import CSS untuk tema bubble
import { Button, Container } from '@mui/material';
import axios from 'axios';

function Quill() {
  const [bubbleStyle, setBubbleStyle] = useState(false);
  const [readMode, setReadMode] = useState(true);
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [selectedText, setSelectedText] = useState('');

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

  useEffect(() => {
    handleGetNote();
  }, []);

  const handleUploadNote = async () => {
    try {
      const res = await axios({
        method: 'POST',
        url: `https://6266738863e0f382568253d1.mockapi.io/api/custom-todo`,
        data: {
          title: 'Land Rover Model T',
          price: '799.00',
          image: 'https://loremflickr.com/640/480/transport',
          deskripsi: text,
          status: false,
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetNote = async () => {
    try {
      const res = await axios({
        method: 'Get',
        url: `https://6266738863e0f382568253d1.mockapi.io/api/custom-todo`,
      });
      console.log(typeof res.data[2].deskripsi);
      setText(res.data[2].deskripsi);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectionChange = (range, source, editor) => {
    if (range) {
      const selectedValue = editor.getText(range.index, range.length);
      console.log(range);
      setSelectedText(selectedValue);
    }
  };

  const handleDeleteText = (range, source, editor) => {
    if (range) {
      const selectedValue = editor.deleteText(range.index, range.length);
      console.log(range);
      // setSelectedText(selectedValue);
    }
  };

  const handleTextDeletion = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();

    if (selection && selection.length > 0) {
      quill.deleteText(selection.index, selection.length);
    }
  };

  const handleTextReplacement = () => {
    const quill = quillRef.current.getEditor();
    const selection = quill.getSelection();

    if (selection && selection.length > 0) {
      const newText = selectedText.toUpperCase();
      quill.deleteText(selection.index, selection.length);
      quill.insertText(selection.index, newText);
    }
  };

  const quillRef = React.createRef();

  return (
    <div className="quill">
      <h1>React Quill Bubble</h1>
      {selectedText}

      <Button variant="outlined" size="small" onClick={handleTextReplacement}>
        Upper Case
      </Button>
      <Container>
        {bubbleStyle === true ? null : (
          <ReactQuill
            ref={quillRef}
            theme="snow"
            value={text}
            onChange={setText}
            onChangeSelection={handleSelectionChange}
            modules={modules}
            formats={formats}
            placeholder="Tulis sesuatu..."
            readOnly={readMode}
          />
        )}
        {bubbleStyle === false ? null : (
          <ReactQuill
            ref={quillRef}
            theme="bubble"
            value={text}
            onChange={setText}
            modules={modules}
            formats={formats}
            placeholder="Tulis sesuatu..."
            readOnly={readMode}
          />
        )}
      </Container>
      <Button variant="contained" onClick={() => setReadMode(!readMode)}>
        Read Mode: {readMode === true ? 'true' : 'false'}
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={() => setBubbleStyle(!bubbleStyle)}>
        Bubble Style: {bubbleStyle === true ? 'true' : 'false'}
      </Button>
      <br />
      <Button variant="outlined" onClick={handleUploadNote}>
        Upload Note
      </Button>
      <br />
      <hr />
      <br />

      <ReactQuill
        ref={quillRef}
        theme="bubble"
        value={text2}
        onChange={setText2}
        modules={modules}
        formats={formats}
        placeholder="Tulis sesuatu..."
      />
      {/* {Parser(text)} */}
    </div>
  );
}

export default Quill;
