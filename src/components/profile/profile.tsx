import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';

const Profile: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          width: '6rem',
          height: '6rem',
          backgroundColor: 'primary.main',
          marginBottom: '1rem',
        }}
      >
        <Typography variant="h4" color="text.primary">
          VS
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        Welcome, Valentine
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task manager
      </Typography>
    </Box>
  );
};

export default Profile;
