/**membuat fungsi sebagai validator yang menggunakan schema dari schema.js */


// const NotesValidator = require('./validator/notes');


/**Fungsi validateNotePayload ini nantinya akan berguna untuk melakukan validasi dan 
 * mengevaluasi apakah validasi itu berhasil atau tidak. */

 const { NotePayloadSchema } = require('./schema');
 
 const NotesValidator = {
   validateNotePayload: (payload) => {
     const validationResult = NotePayloadSchema.validate(payload);
     if (validationResult.error) {
       throw new Error(validationResult.error.message);
     }
   },
 };
  
 module.exports = NotesValidator;