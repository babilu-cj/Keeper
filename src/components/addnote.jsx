import React, { useState } from "react";
import Fade from '@material-ui/core/Fade';

function AddNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [clicked, setClicked] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevData =>({
                    ...prevData,
                    [name]: value

        }))
    }

    function handleCLick() {
        setClicked(true);
    }

    return (
        <form onClick={handleCLick} className="newNote" onSubmit={(event) => { props.handleNote(note); event.preventDefault(); setNote({ title: "", content: "" }); }}>
                <input style={{ visibility: clicked? "visible": "hidden" }} name="title" type="text" placeholder="Note Title" onChange={handleChange} value={note.title}></input>
                <textarea rows={clicked ? "4" : "1"} name="content" placeholder={clicked ? "Note Body" : "Click to add new note"} onChange={handleChange} value={note.content}></textarea>
                <Fade in={clicked} style={{ transitionDelay: clicked ? '750ms' : '0ms' }}>
                    <button style={{ visibility: clicked ? "visible" : "hidden" }} type="submit">+</button>
                </Fade>
        </form>
    )
}

export default AddNote;