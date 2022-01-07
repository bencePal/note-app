import NoteItem from "./NoteItem";
import Note from "../types/note";
import NotesContext from "../context/notes-context";
import { useContext } from "react";

const NoteList = () => {
  const { notes } = useContext(NotesContext)

  return (
    <>
      <h2>Note list</h2>
      <ul>
        {notes.map((note: Note) => (
          <NoteItem note={note} key={note.id} />
        ))}
      </ul>
    </>
  );
}

export default NoteList;
