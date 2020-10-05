import RoomModel from "../models/roomModels.js";

export const getTest = (req, res) => {
  res.send({name: "Hardcoders"});
};

export const postTest = (req, res) => {
  res.send(req.body);
};

export const addRoom = async (req, res) => {
  const room = new RoomModel(req.body);
  await room.save();
  res.send(room);
};

// Read All
export const getRooms = async(req, res) =>{
    const room = await RoomModel.find({});
    res.send(room);
}

// Read One
export const getRoom = async(req, res) =>{
    const room = await RoomModel.find({_id: req.params.id});
    res.send(room);
}

// Update
export const updateRoom = async(req, res) =>{
    const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body);
    await room.save();
    res.send(room);
}

// Delete
export const deleteRoom = async(req, res) =>{
    console.log("delete =>", req.body);
    const room = await RoomModel.findByIdAndDelete(req.params.id);
if(!room){
    res.status(404).send('Aucune chambre trouvée !');
}
res.status(200).send();
}