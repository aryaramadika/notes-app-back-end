/**membuat fungsi sebagai validator yang menggunakan schema dari schema.js */


// const NotesValidator = require('./validator/notes');


/**Fungsi validateNotePayload ini nantinya akan berguna untuk melakukan validasi dan 
 * mengevaluasi apakah validasi itu berhasil atau tidak. */

 const InvariantError = require('../../execptions/InvariantError');
const { NotePayloadSchema } = require('./schema');
 
 const NotesValidator = {
   validateNotePayload: (payload) => {
     const validationResult = NotePayloadSchema.validate(payload);
     if (validationResult.error) {
        throw new InvariantError(validationResult.error.message);
     }
   },
 };
  
 module.exports = NotesValidator;