import express from 'express';
import {getTest, postTest, addRoom, getRooms, getRoom, updateRoom, deleteRoom} from '../controllers/roomControllers.js';
import {catchErrors} from './../helpers.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('hello Redouane Amrani');
});

router.get('/test', getTest);

router.post('/test', postTest);

router.post('/room', catchErrors(addRoom));

router.get('/room/:id', catchErrors(getRoom));

router.patch('/room/:id', catchErrors(updateRoom));

router.get('/rooms', catchErrors(getRooms));

router.delete('/room/:id', catchErrors(deleteRoom));


export default router;