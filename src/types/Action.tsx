import Note from "./note";

type ActionType =
  | { type: "POPULATE_NOTES"; notes: Note[] }
  | { type: "ADD_NOTES"; note: Note }
  | { type: "REMOVE_NOTES"; id: number };

export default ActionType;