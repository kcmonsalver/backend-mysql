import express from 'express';
import { agregarLaboratorio, eliminarLaboratorio, getAllLaboratorio, getLaboratorio, modificarLaboratorio } from '../controllers/LaboratorioController.js';

const router = express.Router();


router.get('/', getAllLaboratorio);
router.get('/:id', getLaboratorio);
router.post('/', agregarLaboratorio);
router.put('/:id',modificarLaboratorio);
router.delete('/:id',eliminarLaboratorio);


export default router;