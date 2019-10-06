import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(20),
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2),
  },
  card: {
    minWidth: 275,
    minHeight: 275,
  },
  title: {
    fontSize: 14,
  },
  word: {
    textAlign: "center",
    marginTop: 100,
    fontSize: 35,
  },
}));

export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = useState({
    story: '',
    word: ''
  });

  const handleChange = story => event => {
    setValues({ ...values, [story]: event.target.value });
  };

  const displayStory = () => {
    const wordArr = values.story.split(' ');
    if (wordArr.length > -1) {
      for (let i = 0; i < wordArr.length; i++) {
        setTimeout(() => {
          setValues({...values, 'word': wordArr[i]})
        }, i*300)
      }
    }
  }

  return (
    <>
      <Grid container className={classes.root} spacing={3} justify="center">
        
        <Grid item xs={8}>
          <form noValidate autoComplete="off">
            <TextField
              fullWidth={true}
              placeholder="It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, ..."
              multiline
              rows="7"
              className={classes.textField}
              value={values.story}
              onChange={handleChange('story')}
            />
          </form>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={displayStory}>
            START
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.word} variant="h5" component="h2">
                {values.word}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
