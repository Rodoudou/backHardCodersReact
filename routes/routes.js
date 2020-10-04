import express from 'express';
import {getTest, postTest, addRoom, getRooms, getRoom, updateRoom, deleteRoom} from '../controllers/roomControllers.js';
import {catchErrors} from './../helpers.js';

const router = express.Router();

router.get('/', (req,res)=>{
    res.send('hello Redouane Amr');
});

router.get('/test', getTest);

router.post('/test', postTest);

router.post('/room', catchErrors(addRoom));

router.get('/:id', catchErrors(getRoom));

router.get('/rooms', catchErrors(getRooms));

router.patch('/room/:id', catchErrors(updateRoom));

router.delete('/room/:id', catchErrors(deleteRoom));


export default router;