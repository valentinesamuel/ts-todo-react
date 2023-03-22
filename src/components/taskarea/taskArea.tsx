import { FC, ReactElement } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskcounter/TaskCounter';
import Task from '../task/task';
import { useMutation, useQuery } from 'react-query';
import { sendAPIRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/iTaskApi';
import { Status } from '../createtaskform/enum/Status';
import { IUpdateTask } from '../createtaskform/interfaces/iUpdateTask';

const TaskArea: FC = (): ReactElement => {
  const { data, isLoading, dataUpdatedAt, refetch, error } = useQuery(
    ['tasks'],
    async () => {
      return await sendAPIRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  );

  const updateTaskMutation = useMutation((data: IUpdateTask) =>
    sendAPIRequest('http://localhost:3200/tasks', 'PUT', data),
  );

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status Of Your Task As At {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter />
          <TaskCounter />
          <TaskCounter />
        </Grid>
        <Grid item display="flex" flexDirection="column" xs={10} md={8}>
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks
              </Alert>
            )}
            {!error && Array.isArray(data) && data.length === 0 && (
              <Alert severity="warning">
                No tasks created. Please create some tasks
              </Alert>
            )}
            {isLoading ? (
              <Alert severity="warning">
                No tasks created. Please create some tasks
              </Alert>
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return each.status === Status.todo ||
                  each.status === Status.inProgress ? (
                  <Task
                    id={each.id}
                    key={index + each.priority}
                    title={each.title}
                    date={new Date(each.date)}
                    description={each.description}
                    priority={each.priority}
                    status={each.status}
                    onStatusChange={onStatusChangeHandler}
                  />
                ) : (
                  false
                );
              })
            )}
          </>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
