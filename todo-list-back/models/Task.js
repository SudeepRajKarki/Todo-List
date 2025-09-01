import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Details:{
    type :String,
    required :true,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
