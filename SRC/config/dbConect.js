import mongoose  from "mongoose";

mongoose.connect("mongodb+srv://Paola:123@senac.b5s42.mongodb.net/senac-node");

let db = mongoose.connection;

export default db;