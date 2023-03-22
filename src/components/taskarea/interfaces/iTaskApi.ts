import { Priority } from '../../createtaskform/enum/Priority';
import { Status } from '../../createtaskform/enum/Status';

export interface ITaskApi {
  id: string;
  date: string;
  title: string;
  description: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
