import { TaskCounterStatusType } from '../../taskcounter/interfaces/ITaskCounter';
import { ITaskApi } from '../interfaces/iTaskApi';

export const countTasks = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) {
    return 0;
  }
  const totalTasks = tasks.filter((task) => {
    return task.status === status;
  });

  return totalTasks.length;
};
