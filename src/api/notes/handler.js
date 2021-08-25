class NotesHandler{
    constructor(service){
        this._service = service;
    }

    postNoteHandler(request, h){


        try {
            const{ title = 'untitled', body, tags } = request.payload; 
            const noteId = this._service.addNote({ title, body, tags });
    
            const response = h.response({
                status :'success',
                message : 'Catatan Berhasil ditambahkan',
                data : {
                    noteId,
                },
            });
            response.code(201);
            return response;
    
        } catch (error) {
            const response = h.response({
                status :'fail',
                message : error.message,
            });
            response.code(404);
            return response
        }

    }

    getNotesHandler(){
        const notes = this._service.getNotesHandler();
        return {
             status :'success',
             data :{
                 notes,
             },
        };

    }
    getNoteByIdHandler(request, h){
        try {
            const {id} = request.params;
            const note = this._service.getNoteById(id);
            return{
                status :'success',
                data : {
                    note,
                }
            }
        } catch (error) {
            const response = h.response({
                status :'fail',
                message : error.message,
            });

            response.code(404);
            return response;
        }

    } 
    putNoteByIdHandler(request, h) {

        try {
            const {id} = request.params;
            this._service.editNoteById(id, request.payload);
            
            return{
                 status : 'success',
                 message : 'Catatan berhasil diperbarui',
            };
    
            
        } catch (error) {
            const response = h.response({
                status : 'fail',
                message : 'Catatan gagal diperbarui',         
            });
            response.code(404);
            return response;
        }


    }
    deleteNoteByIdHandler() {
        try {
            const {id} = request.params;
            this._service.deleteNoteByIdHandler(id);
            return {
                status : 'success',
                message : 'Catatan berhasil dihapus',
            };
        } catch (error) {
            const response = h.response({
                status :'fail',
                message : 'Catatan gagal dihapus , Id tidak ditemukan',
            });
            response,code(404);
            return response;
        }
      
    }

}

module.exports = NotesHandler;