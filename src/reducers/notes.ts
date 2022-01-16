import ActionType from "../types/Action";
import Note from "../types/note";

const notesReducer = (state: Note[], action: ActionType) : Note[] => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    case 'ADD_NOTES':
      return  [
        ...state,
        action.note
      ]
    case 'REMOVE_NOTES':
      return state.filter((note: Note) => note.id !== action.id)
    default:
      return state
  }
}

export default notesReducer;