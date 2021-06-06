import React from "react"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Note(props) {
    return (
        <div className="note">
            <h4>{props.title}</h4>
            <p>{props.body}</p>
            <button onClick={()=>{props.delete(props.id)}}><DeleteForeverIcon /></button>
        </div>
    )
}

export default Note;