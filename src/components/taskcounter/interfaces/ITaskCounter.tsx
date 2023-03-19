import { Status } from '../../createtaskform/enum/Status';

export type TaskCounterStatusType =
  | Status.completed
  | Status.inProgress
  | Status.todo;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
}
