import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from 'react-titles/Title6';
import ImageCard from './ImageCard';
import places from '../static/places';
import items from '../static/items';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  },
  animtitle: {
    paddingTop: '80px',
    paddingBottom: '15px',
    textAlign: 'center',
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div id="projects">
      <div className={classes.animtitle}>
        <Title size="150" text1="Apps" open={true} />
      </div>
      <div className={classes.root}>
        <div>
          <ImageCard place={places[0]} items={items[0]} />
          <ImageCard place={places[1]} items={items[1]} />
        </div>
        <div>
          <ImageCard place={places[2]} items={items[2]} />
          <ImageCard place={places[3]} items={items[3]} />
        </div>
      </div>
    </div>
  );
}