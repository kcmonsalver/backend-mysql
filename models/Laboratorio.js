import conectarBDl from "../config/dbl.js";
import {DataTypes} from "sequelize";

const Laboratorio = conectarBDl.define('laboratorio', {
    
    ordenMedica: {
        type: DataTypes.NUMBER,
        allowNull: false
    },

    examen: {
        type: DataTypes.STRING,
        allowNull: false
    },

    cantidad: {
        type: DataTypes.NUMBER,
        allowNull: false
    },

    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }

    

});

export default Laboratorio;