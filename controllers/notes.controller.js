import NotesService from "../services/notes.service.js";


const notesService = new NotesService();


export const createNote = async (req, res) => {
    try{


        const noteData = {
            title: req.body.title,
            content: req.body.content
        }
        const newNote = await notesService.createNote(noteData);
        res.status(201).send({
            message: "Note created successfully",
            data: newNote
        })
    }
    catch(err){
        res.status(500).send({
            message: "Error creating note",
            error: err.message
        });
    }

}

export const getAllNotes =  async (req,res) => {
        try{
            const allNotes = await notesService.getAllNotes();
            res.status(200).send({
                message: "Notes fetched successfully",
                data: allNotes
            });
        }
        catch(err){
            res.status(500).send({
                message: "Error fetching notes",
                error: err.message
            });
        }
}

export const getNoteById = async (req,res) =>{
        try{
            const noteId = req.params.id;
            const note = await notesService.getNoteById(noteId);
            if(note){
                res.status(200).send({
                    message: "Note fetched successfully",
                    data: note
                });
            }
            else{
                res.status(404).send({
                    message: "Note not found"
                });
            }
        }
        catch(err){
            res.status(500).send({
                message: "Error fetching note",
                error: err.message
            });
        }
}


export const updateNote = async (req,res) => {
        try{
            const noteId = req.params.id;
            const updateData = {
                title: req.body.title,
                content: req.body.content
            }
            const updatedNote = await notesService.updateNote(noteId, updateData);
            if(updatedNote){
                res.status(200).send({
                    message: "Note updated successfully",
                    data: updatedNote
                });
            }
            else{
                res.status(404).send({
                    message: "Note not found"
                });
            }
        }
        catch(err){
            res.status(500).send({
                message: "Error updating note",
                error: err.message
            });
        }

}

export const deleteNote = async (req,res) => {
        try{
            const noteId = req.params.id;
            const deletedNote = await notesService.deleteNote(noteId);
            if(deletedNote){
                res.status(200).send({
                    message: "Note deleted successfully",
                    data: deletedNote
                });
            }
            else{
                res.status(404).send({
                    message: "Note not found"
                });
            }
        }
        catch(err){
            res.status(500).send({
                message: "Error deleting note",
                error: err.message
            });
        }
}

