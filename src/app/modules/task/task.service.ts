import { TTasks } from './task.interface';
import { Task } from './task.model';

const getAllTasksFromDB = async () => {
  const result = await Task.find();
  return result;
};

const creteTaskInToDB = async (payload: TTasks) => {
  const result = await Task.create(payload);
  return result;
};

const deleteTaskFromDB = async (id: string) => {
  const result = await Task.deleteOne({ _id: id });
  return result;
};

const updateTaskInToDB = async (id: string, payload: Partial<TTasks>) => {
  const result = await Task.updateOne({ _id: id }, { $set: payload });
  return result;
};

export const TaskServices = {
  getAllTasksFromDB,
  creteTaskInToDB,
  deleteTaskFromDB,
  updateTaskInToDB,
};
