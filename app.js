import express from 'express'
import cors from 'cors'
import conectarBD from './config/db.js';
import conectarBDl from './config/dbl.js';
import laboratorioRoutes from './routes/routasLab.js'
import citasRoutes from './routes/Rutas.js'



const app = express(); 
app.use(cors());
app.use(express.json());

app.use('/citas', citasRoutes)
app.use('/laboratorio', laboratorioRoutes)

try {
    await conectarBD.authenticate();
    console.log('se realizo la conexion con la base de datos citas');
  } catch (error) {
    console.error('no se pudo realizar la conexion:', error);
  }

  try {
    await conectarBDl.authenticate();
    console.log('se realizo la conexion con la base de datos laboratorio');
  } catch (error) {
    console.error('no se pudo realizar la conexion:', error);
  }
  
app.get('/',(req, res)=>{
    res.send('hola mundo')
});



app.listen(3000,  ()=>{
    console.log('el servidor esta conectado http://localhost:3000/')
});

