import { Schema, model } from 'mongoose';
import { TTasks } from './task.interface';

const taskSchema = new Schema<TTasks>({
  status: {
    type: String,
    enum: {
      values: ['pending', 'running', 'done', 'archive'],
      message: '{VALUE} is not valid status',
    },
    default: 'pending',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },

  priority: {
    type: String,
    enum: {
      values: ['Low', 'Medium', 'high'],
      message: '{VALUE} is not valid priority',
    },
    default: 'Low',
    required: true,
  },
});

export const Task = model<TTasks>('Task', taskSchema);
