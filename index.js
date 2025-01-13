import express from 'express';
import { connectDB } from './DB/connection.js';
import userRouter from './src/modules/user/user.js'
const app = express();
connectDB();

app.use(express.json());
app.use('/users',userRouter);

app.listen(3000,()=>{

    console.log("server is running .... 3000");

});