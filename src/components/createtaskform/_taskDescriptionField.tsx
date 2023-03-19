import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';


const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const {
    onChange = (e) => {
      console.log(e.target.value);
    },
    disabled = false,
  } = props;
  return (
    <TextField
      id="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      name="description"
      rows={4}
      fullWidth
      multiline
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default TaskDescriptionField;
TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};