import mongoose from 'mongoose';

const RoomShema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        lowercase: true
    },
    maxpersons:{
        type: Number,
        default: 1,
        validate: value =>{
            if(value <= 0){
                throw new Error('La chambre doit accueillir au moins une personne.')
            }
        }
    }
})

const Room = mongoose.model('Room', RoomShema);

export default Room;