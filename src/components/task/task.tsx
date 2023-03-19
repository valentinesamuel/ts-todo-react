import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Avatar, Typography } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_TaskFooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../createtaskform/enum/Priority';
import { Status } from '../createtaskform/enum/Status';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderCOlor';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Tast title',
    date = new Date(),
    description = 'Fake sce4',
    priority = Priority.high,
    status = Status.completed,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'Background.paper',
        borderRadius: '.5rem',
        border: '.06rem solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onStatusChange={onStatusChange} onClick={onClick} />
    </Box>
  );
};

export default Task;

Task.prototype = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};
