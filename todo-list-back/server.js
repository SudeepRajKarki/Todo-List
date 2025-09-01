import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors' 
import {connectdb} from './config/db.js'
import taskroute from './routes/tasks.js'
dotenv.config();
const PORT=(process.env.PORT);
const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/tasks", taskroute);


connectdb().then(()=>{
   app.listen(PORT ,'0.0.0.0', () =>{
   console.log("server running in Port 5002");
});
});
