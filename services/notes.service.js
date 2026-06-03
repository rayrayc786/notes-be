//repository => Business LOgic validdations like check if the note exists or not, if the user is authorized to perform the action or not, etc

import NotesRepository from "../repository/notesRepository.js";

class NotesService{

    constructor(){
        //when we are calling functions from another class
        this.notesRepository = new NotesRepository();
    }

    async createNote(noteData){
        try{
            const newNote = await this.notesRepository.createNote(noteData);
            return newNote;
        }
        catch(err){
            throw new Error("Error creating note: " + err.message);
        }
    }


    async getAllNotes(){
        try{
            const allNotes = await this.notesRepository.getAllNotes();  
            return allNotes;
        }
        catch(err){
            throw new Error("Error fetching notes: " + err.message);
        }
    }

    async getNoteById(noteId){
        try{
            const note = await this.notesRepository.getNoteById(noteId);
            return note;
        }
        catch(err){
            throw new Error("Error fetching note: " + err.message);
        }
    }

    async updateNote(noteId, updateData){
        try{
            const updatedNote = await this.notesRepository.updateNote(noteId, updateData);
            return updatedNote;
        }
        catch(err){
            throw new Error("Error updating note: " + err.message);
        }
    }

    async deleteNote(noteId){
        try{
            const deleteNote = await this.notesRepository.deleteNote(noteId);
            return deleteNote;
        }
        catch(err){
            throw new Error("Error deleting note: " + err.message);
        }
    }

}

export default NotesService;
