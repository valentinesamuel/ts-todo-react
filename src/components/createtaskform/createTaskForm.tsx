import { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import TaskTitleField from './_taskTitleField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskDateField from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enum/Status';
import { Priority } from './enum/Priority';

const CreateTaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create a Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack direction="row" sx={{ width: '100%' }} spacing={2}>
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              { value: Status.todo, label: Status.todo.toUpperCase() },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              { value: Priority.low, label: Priority.low },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
