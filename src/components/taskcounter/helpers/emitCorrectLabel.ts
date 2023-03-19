import { Status } from '../../createtaskform/enum/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return 'Todo';
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';

    default:
      return 'Todo';
  }
};
