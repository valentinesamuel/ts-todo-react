import { FC, ReactElement } from 'react';
import { Box, Avatar, Typography } from '@mui/material';

export const TaskCounter: FC = (): ReactElement => {
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
            borderColor: 'warning.light',
          }}
        >
          <Typography color="#ffffff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#ffffff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};
