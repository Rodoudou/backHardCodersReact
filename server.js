import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app= express();

app.use(express.json());

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.use(routes);

app.listen(PORT, ()=>{
    console.log(`le serveur est lancé sur le port : ${PORT}`);
})