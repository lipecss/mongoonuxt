import { Note } from "~~/server/models/note.model";

export default defineEventHandler(async (event) => {
  const { title, description, urlImage } = await readBody(event);

  const newNote = await Note.create({ title, description, urlImage })

  return newNote
})
