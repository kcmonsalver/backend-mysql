import { Sequelize } from "sequelize";


const conectarBDl = new Sequelize('database_laboratorio','root','',{
    host: 'localhost',
    dialect: 'mysql'
    
});

export default conectarBDl;