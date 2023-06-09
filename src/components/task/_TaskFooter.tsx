import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../createtaskform/enum/Status';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    id,
    status,
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" defaultChecked={status === Status.inProgress}  onChange={(e) => onStatusChange(e,id)} />}
      ></FormControlLabel>
      <Button
        variant="contained"
        color="success"
        sx={{ color: '#ffffff' }}
        size="small"
        onClick={(e) => onClick(e,id)}
      >
        Complete
      </Button>
    </Box>
  );
};

TaskFooter.prototype = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};
