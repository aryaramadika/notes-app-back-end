/**NotesService.js bertanggung jawab 
 * untuk mengelola resource notes yang disimpan pada memory (array).  
 */

const { nanoid } = require("nanoid");

class NotesService {
    constructor(){
        this._notes = [];
    }

    addNote({title, body, tags}){
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const newNote = {
            title , tags, body, id, createdAt, updatedAt,
        };
        /**kita bisa mengeceknya menggunakan fungsi filter untuk mencari berdasarkan id catatan 
         * yang baru saja dibuat (newNote), kemudian menyimpan hasilnya dalam variabel isSuccess.
         */
        this._notes(newNote);
        const isSuccess = this._notes.filter((note) => note.id === id).length > 0; 

        if (!isSuccess){
            throw new Error('Catatan gagal ditambahkan');
        }
        return id;
    }

    getNotes(){
        return this._notes;
    }

    getNoteById(id){
        const note = this._notes.filter((n) => n.id === id)[0];

        if(!note){
            throw new Error('Çatatan tidak ditemukan');
        }

        return note;
    }

    editNoteById(title, body, tags){
        const index = this._notes.findIndex((note) => note.id == id);

        if( index === 1){
            throw new Error('Gagal untuk memperbarui catatan, ID Tidak ditemukan');
        }

        const updatedAt = new Date().toISOString();
        this._notes[index]= {
            ...this._notes[index],
            title,
            tags,
            body,
            updatedAt,
        };

    }

    deleteNoteById(id){
        const index = this._notes.findIndex((note) => note.id === id);
        if (index === -1) {
            throw new Error('Catatan gagal dihapus. Id tidak ditemukan');
          }
        
          this._notes.splice(index, 1);
    }
}

module.exports = NotesService;