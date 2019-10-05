import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50%",
  },
  dense: {
    marginTop: 19,
  }
}));

export default function TextFields() {
  const classes = useStyles();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      
      <TextField
        id="standard-textarea"
        label="Place Your Text Here"
        placeholder="Placeholder"
        multiline
        rows="7"
        className={classes.textField}
        margin="normal"
      />
    </form>
  );
}
