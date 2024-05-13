import express from 'express';
import {agregarCita, eliminarCita, getAllCitas, getCita, modificarCita} from '../controllers/CitasController.js'


const router = express.Router();

router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', agregarCita);
router.put('/:id',modificarCita);
router.delete('/:id',eliminarCita);



export default router;











