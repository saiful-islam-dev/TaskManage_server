import { Router } from 'express';
import { taskController } from '../modules/task/task.controller';

const router = Router();

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.creteTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.patch('/tasks/:id', taskController.updateTask);

export default router;
