import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

export const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
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
        control={<Switch color="warning" onChange={(e) => onStatusChange(e)} />}
      ></FormControlLabel>
      <Button
        variant="contained"
        color="success"
        sx={{ color: '#ffffff' }}
        size="small"
        onClick={(e) => onClick(e)}
      >
        Complete
      </Button>
    </Box>
  );
};

TaskFooter.prototype = {
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};
