import { useState, useContext } from "react";
import NotesContext from "../context/notes-context";
import Note from "../types/note";

const AddNoteForm = () => {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const { notes, dispatch } = useContext(NotesContext)

  const generateId = (): number => {
    let largestId = 0;
    notes.forEach((note: Note) => {
      if (largestId < note.id) {
        largestId = note.id
      }
    })
    return largestId + 1
  }

  const addNote = (e: React.FormEvent): void => {
    e.preventDefault()
    dispatch({ type: 'ADD_NOTES', note: {title, body, id: generateId()} })
    setTitle('')
    setBody('')
  }

  return (
    <form onSubmit={addNote}>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
    </form>
  )
}

export default AddNoteForm;