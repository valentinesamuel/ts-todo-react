import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

interface IProfile {
  name?: string;
}

const Profile: FC<IProfile> = (props): ReactElement => {
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
          {`${name[0]}`}
        </Typography>
      </Avatar>
      <Typography variant="h6" color="text.primary">
        {`Welcome, ${name}`}
      </Typography>
      <Typography variant="body1" color="text.primary">
        This is your personal task manager
      </Typography>
    </Box>
  );
};

export default Profile;

Profile.propTypes = {
  name: PropTypes.string.isRequired,
};
