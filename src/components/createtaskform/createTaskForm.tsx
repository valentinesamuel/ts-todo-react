import { FC, ReactElement, useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Alert,
  AlertTitle,
  LinearProgress,
} from '@mui/material';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enum/Status';
import { Priority } from './enum/Priority';
import { useMutation } from 'react-query';
import { sendAPIRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskarea/interfaces/iCrreateTask';

const CreateTaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendAPIRequest('http://localhost:3200/tasks', 'POST', data),
  );

  function createTaskHandler() {
    if (!title || !description || !date) {
      return;
    }
    const task: ICreateTask = {
      title,
      description,
      status,
      date: date.toString(),
      priority,
    };
    createTaskMutation.mutate(task);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
    }
    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => {
      clearTimeout(successTimeout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '1rem' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfullt
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField
          onChange={(e) => setTitle(e.target.value)}
          disabled={createTaskMutation.isLoading}
        />
        <TaskDescriptionField
          disabled={createTaskMutation.isLoading}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          disabled={createTaskMutation.isLoading}
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack direction="row" sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            items={[
              { value: Priority.low, label: Priority.low },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
        {createTaskMutation.isLoading && <LinearProgress />}

        <Button
          disabled={!title || !description || !date || !status || !priority}
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
        >
          Create a task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
