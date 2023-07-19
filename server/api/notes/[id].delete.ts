import mongoose from 'mongoose'
import { Note } from "~~/server/models/note.model";

export default defineEventHandler(async (event) => {
  const { id } = getRouterParams(event);

  try {
    const deletedNote  = await Note.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id) });

    if (deletedNote) {
      // Faça o que quiser com o documento excluído aqui, por exemplo, retorná-lo na resposta da API
      return { statusCode: 200, body: JSON.stringify(deletedNote) };
    } else {
      return { statusCode: 404, body: JSON.stringify({ message: 'Documento não encontrado' }) };
    }
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ message: 'Erro ao excluir o documento' }) };
  }
})
