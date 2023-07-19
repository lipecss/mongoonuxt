import { Note } from "~~/server/models/note.model";

export default defineEventHandler(async (event) => {
  const notes = await Note.find()

  return notes
})
