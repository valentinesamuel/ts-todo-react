import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const Profile: FC = (props: any): ReactElement => {
  const { name = 'John' } = props;
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
        {`Welcome, ${name[0]} ${name[name.length]}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task manager
      </Typography>
    </Box>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
};
