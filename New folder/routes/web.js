import express from 'express'
import studentController from '../controller/studentController.js';
const router = express.Router();




router.get('/', studentController.getAllDoc);
router.post('/', studentController.createDoc);
router.get('/:id', studentController.getSingleDocById);
router.put('/:id', studentController.updateDocById);
router.delete('/:id', studentController.deleteDocById);


export default router;
