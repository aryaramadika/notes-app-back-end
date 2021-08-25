const { addNoteHandler, getAllNotesHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("../../handler");

const routes = (handler) => [
    {
        method :'POST',
        path : '/notes',
        handler : handler.postNoteHandler,
    },
    {
        method :'GET',
        path : '/notes',
        handler : handler.getNotesHandler,
    },
    {
        method :'GET',
        path : '/notes/{id}',
        handler : handler.getNotesByIdHandler,
    },
    {
        method : 'PUT',
        path :'/notes/{id}',
        handler : handler.putNoteByIdHandler,
    },
    {
        method :'DELETE',
        path :'notes/{id}',
        handler : handler.deleteNoteByIdHandler,
    },
    

];

module.exports = routes;
