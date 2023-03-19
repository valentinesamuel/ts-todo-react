import { ITaskFooter } from './ITaskFooter';
import { ITaskDescription } from './iTaskDescription';
import { ITaskHeader } from './iTaskHeader';

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
