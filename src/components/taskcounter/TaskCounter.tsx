import { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createtaskform/enum/Status';
import { emitCorrectBorderColor } from './helpers/emitCorrectBorderColorStatus';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
import PropTypes from 'prop-types';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '.313rem solid',
            width: '6rem',
            height: '6rem',
            marginBottom: '1rem',
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          {`${emitCorrectLabel(status)}`}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf([Status.completed, Status.inProgress, Status.todo]),
};
