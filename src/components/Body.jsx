import React, { useState } from "react";
import Note from "./Note";
// import notes from "./notes";
import AddNote from "./addnote";

function Body() {

   const [arr, setArr] = useState([]);

   function addNote(note) {
      setArr(prevData => {
         return (
            [...prevData, note]
         )
   })
   };

   function deleteNote(id) {
      setArr(prevData => {
         return prevData.filter((item, index) => {
            return (
               index!==id
            )
         })
      })
   }

   return (
      <div>
         <AddNote handleNote={addNote}/>
         <div className="body-container">
            {arr.map((note, index) => <Note key={index} id={index} title={note.title} body={note.content} delete={deleteNote}/>)}
      </div>
      </div>)
}

export default Body;