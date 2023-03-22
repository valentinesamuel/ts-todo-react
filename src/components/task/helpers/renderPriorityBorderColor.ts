import { Priority } from './../../createtaskform/enum/Priority';
import { yellow, red, green } from '@mui/material/colors';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.high:
      return red[500];
    case Priority.low:
      return yellow[500];
    case Priority.normal:
      return green[500];
    default:
      return 'grey.900';
  }
};
