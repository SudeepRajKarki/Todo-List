import Task from '../models/Task.js'

export async function getalltasks(req,res) {

    try {
        const Tasks = await Task.find();
        res.status(200).json(Tasks);

        
    } catch (error) {
        console.log("Error fetching the data",error);
        res.status(500).json({message:"Internal server error"});
        
    }
    
}

export async function createtasks(req,res) {
    try {
        const {title ,Details} = req.body;
        const newtask= new Task({title , Details});
        await newtask.save();
        res.status(200).json({message:"Task created successfuly"})

        
    } catch (error) {
        console.log("failed to run createTask",error);
        res.status(500).json({message:"error" });
        
    }
}

export async function updatetask(req,res){
    try {
        const {title,Details} = req.body;
        const updatedtask = await Task.findByIdAndUpdate(req.params.id,{title,Details},{new:true});
        res.status(200).json({message:"Task updated successfully" });

        
    } catch (error) {
        console.log("failed to update",error);
        res.status(500).json({message:"internal server error"});
        
    }
}
export async function deleteTask(req,res){
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"Task deleted successfully"});
        
    } catch (error) {
        console.log("failed to delete",error);
        res.status(500).json({message:"internal server error"});
        
    }
}
export async function getTaskbyid(req,res){
    try {
        const oneTask = await Task.findById(req.params.id);
        res.status(200).json(oneTask);
        
    } catch (error) {
        console.log("unable to fetch data!!");
        res.status(500).json({message:"unable to response the data "});
        
    }
}