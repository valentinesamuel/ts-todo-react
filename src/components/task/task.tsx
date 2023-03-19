import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Avatar, Typography } from '@mui/material';
import { TaskHeader } from './_taskHeader';

const Task: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'Background.paper',
        borderRadius: '.5rem',
        border: '.06rem solid',
        borderColor: 'error.light',
      }}
    >
      <TaskHeader />
    </Box>
  );
};

export default Task;
