import { Status } from '../../createtaskform/enum/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectBorderColor = (status: TaskCounterStatusType) => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'warning.light';
    case Status.completed:
      return 'success.light';

    default:
      return 'error.light';
  }
};
