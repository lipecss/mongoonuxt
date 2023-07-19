import { Schema, model } from 'mongoose'

const NoteSchema = new Schema({
  title: String,
  description: String,
  urlImage: {
    type: String,
    default: '',
    required: false
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
})

export const Note = model('Note', NoteSchema)
