import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TaskServices } from './task.service';

const getAllTasks = catchAsync(async (req, res) => {
  const result = await TaskServices.getAllTasksFromDB();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const creteTask = catchAsync(async (req, res) => {
  const result = await TaskServices.creteTaskInToDB(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const deleteTask = catchAsync(async (req, res) => {
  const taskId = req.params.id;
  const result = await TaskServices.deleteTaskFromDB(taskId);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

const updateTask = catchAsync(async (req, res) => {
  const taskId = req.params.id;
  const result = await TaskServices.updateTaskInToDB(taskId, req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: 'Course created successfully',
    data: result,
  });
});

export const taskController = {
  getAllTasks,
  creteTask,
  deleteTask,
  updateTask,
};
