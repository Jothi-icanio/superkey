import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import default styling
import "./quill.css"

const CustomQuillEditor = () => {
  const [content, setContent] = useState("");
  var icons = ReactQuill.Quill.import("ui/icons");

  const modules = {
    toolbar: [
      [{ 'undo': 'undo' }, { 'redo': 'redo' }],
      [{ 'font': [] }], // Font selection
      ['bold', 'italic', 'underline', 'strike'], // Text formatting
      [{ 'color': [] }], // Text color and background color
      // [{ 'script': 'sub' }, { 'script': 'super' }], // Subscript/Superscript
      ['link', 'image'], // Links and images
      [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Lists
      [
        { align: '' }, // Default alignment (left)
        { align: 'center' }, // Center alignment
        { align: 'right' }, // Right alignment
        { align: 'justify' }, // Justify alignment
      ],// Text alignment
      ['clean'], // Remove formatting
    ],
    history: {
      delay: 1000,
      userOnly: true, // optional, limits the undo/redo to user actions
    },
  };
  // const formats = [
  //   'font',
  //   'bold', 'italic', 'underline', 'strike',
  //   'color', 'background',
  //   'script',
  //   'link', 'image',
  //   'list', 'bullet',
  //   'align',
  //   'undo', 'redo', 'clean',
  // ];

  const handleChange = (value) => {
    setContent(value);
  };


  return (
    <div>
      {/* The toolbar will now be at the bottom */}
      <ReactQuill value={content} placeholder="Type here..."       theme="snow" // Ensure the correct theme is used

         onChange={handleChange} modules={modules} style={{display:"flex", flexDirection:"column-reverse", width:"75vw", height:"35vh", marginBottom:"5rem"}}/>
    </div>
  );
};

export default CustomQuillEditor;
