import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';

export const TaskFooter: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" />}
      ></FormControlLabel>
      <Button
        variant="contained"
        color="success"
        sx={{ color: '#ffffff' }}
        size="small"
      >
        Complete
      </Button>
    </Box>
  );
};

TaskFooter.prototype = {};
