export type TTasks = {
  status: 'pending' | 'running' | 'done' | 'archive';
  title: string;
  description: string;
  date: string;
  assignedTo: string;
  priority: 'Low' | 'Medium' | 'high';
};
