import express from 'express'
import { getalltasks } from '../contoller/Taskcontroller.js';
import { getTaskbyid } from '../contoller/Taskcontroller.js';
import { createtasks } from '../contoller/Taskcontroller.js';
import { updatetask } from '../contoller/Taskcontroller.js';
import { deleteTask } from '../contoller/Taskcontroller.js';
const router = express.Router();


router.get("/", getalltasks);
router.get("/:id", getTaskbyid);
router.post("/", createtasks);
router.put("/:id",updatetask);
router.delete("/:id",deleteTask);

export default router;