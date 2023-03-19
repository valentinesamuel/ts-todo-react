import { Priority } from './../../createtaskform/enum/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.high:
      return 'grey.900';
    case Priority.low:
      return 'info.light';
    case Priority.normal:
      return 'success.light';
    default:
      return 'grey.900';
  }
};
