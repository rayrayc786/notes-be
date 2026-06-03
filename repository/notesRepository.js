// Notes Repository

//initiliase the connection to the database and perform CRUD operations on notes collection


import notes from "../models/notes.model.js";

class NotesRepository{
    async createNote(noteData){

        try{
            const newNote = await notes.create(noteData);
            return newNote;

        }catch(err){
            throw new Error("Error creating note: " + err.message);
        }

    }


    async getAllNotes(){
        try{
            const allNotes = await notes.find();
            return allNotes;
        }catch(err){
            throw new Error("Error fetching notes: " + err.message);
        }
    }

    async getNoteById(noteId){
        try{
            const note = await notes.findById(noteId);
            return note;
        }catch(err){
            throw new Error("Error fetching note: " + err.message);
        }
    }

    async updateNote(noteId, updateDate){
        try{
            const updatedNote = await notes.findByIdAndUpdate(noteId, updateDate, {new : true});
            return updatedNote;
        }catch(err){
            throw new Error("Error updating note: " + err.message);
        }
    }


    async deleteNote(noteId){
        try{
            const deleteNote = await notes.findByIdAndDelete(noteId);
            return deleteNote;
        }
        catch(err){
            throw new Error("Error deleting note: " + err.message);
        }
    }



    



}

export default NotesRepository;
