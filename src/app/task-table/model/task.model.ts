import { TaskStatus } from './task-status.model';

export interface ITask {
  id: number;
  status: TaskStatus;
  name: string;
  assignedUser: string;
}
