import Citas from "../models/Citas.js";

//mostrar todas las citas

export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);

    } catch (error) {
        res.json({
            msg: error.message
        })
    }
}

export const getCita = async (req, res) => {
    try {
        const cita = await Citas.findAll({
            where: {id:req.params.id}
        });
        
        res.json(cita[0]);
    } catch (error) {
        res.json({ msg: error.message})
    }
}

export const agregarCita = async (req,res) => {
    try {
        await Citas.create(req.body);
        res.json({msg: ' se agrego una cita nueva'})

    } catch (error) {
        res.json({ msg: error.message})
    }
}

export const modificarCita = async(req,res)=>{
    try {
         await Citas.update(req.body,{
            where: {id:req.params.id}
         });
        res.json({msg: ' se modifico una cita'})
    } catch (error) {
        res.json({ msg: error.message})
    }
}

export const eliminarCita = async(req,res)=>{
    try {
        await Citas.destroy({
            where: {id:req.params.id}
        });
        res.json({msg: ' se elimino una cita'})
    } catch (error) {
        res.json({ msg: error.message})
    }
}