import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/iTaskDescription';

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
    const { description = "Lorem qerqleinr g"} = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
