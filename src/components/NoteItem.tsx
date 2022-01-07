import { useContext, useEffect } from "react";
import NotesContext from "../context/notes-context";
import Note from "../types/note";

type Props = {
  note: Note
}

const NoteItem = ({ note } : Props) => {
  const { dispatch } = useContext(NotesContext)

  useEffect(() => {
    return () => {
      console.log('note deleted')
    }
  }, [])

  return (
    <li>
      <h4>{note.title} <button onClick={() => dispatch({type: 'REMOVE_NOTES', id: note.id})}>x</button></h4>
      <p>{note.body}</p>
    </li>
  )
}

export default NoteItem;