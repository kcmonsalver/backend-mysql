
import Laboratorio from "../models/Laboratorio.js";



export const getAllLaboratorio = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findAll();
        res.json(laboratorio);

    } catch (error) {
        res.json({
            msg: error.message
        })
    }
}

export const getLaboratorio = async (req, res) => {
    try {
        const laboratorio = await Laboratorio.findAll({
            where: {id:req.params.id}
        });
        
        res.json(laboratorio[0]);
    } catch (error) {
        res.json({ msg: error.message})
    }
}

export const agregarLaboratorio = async (req,res) => {
    try {
        await Citas.create(req.body);
        res.json({msg: ' se agrego un nuevo laboratorio'})

    } catch (error) {
        res.json({ msg: error.message})
    }
}

export const modificarLaboratorio = async(req,res)=>{
    try {
         await Laboratorio.update(req.body,{
            where: {id:req.params.id}
         });
        res.json({msg: ' se modifico una laboratorio'})
    } catch (error) {
        res.json({ msg: error.message})
    }
}

export const eliminarLaboratorio = async(req,res)=>{
    try {
        await Laboratorio.destroy({
            where: {id:req.params.id}
        });
        res.json({msg: ' se elimino un laboratorio'})
    } catch (error) {
        res.json({ msg: error.message})
    }
}