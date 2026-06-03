import express from 'express';
import * as notes from "../controllers/notes.controller.js";

const router = express.Router();

router.route('/create').post(notes.createNote);
router.route('/').get(notes.getAllNotes);
router.route('/:id').get(notes.getNoteById);
router.route('/:id').put(notes.updateNote);
router.route('/:id').delete(notes.deleteNote);

//put is better when we want to update the whole data and patch is better when we want to update a part of the data

//put and patch are used for updating data, but put is used when we want to update the whole data and patch is used when we want to update a part of the data

//in put request, if we are not sending any field then it will be set to null or undefined but in patch request, if we are not sending any field then it will remain unchanged
export default router;