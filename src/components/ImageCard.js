import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import ItemsCarousel from './ItemsCarousel';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff',
    coursor: 'pointer',
  },
  linka: {
    textDecoration: 'none',
    color: '#fff',
  },
  titletech: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#ddd',
    marginTop: '10px'
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
  atitlelink: {
    color: '#ccccff',
  },
});

export default function ImageCard({ place, items }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <a href={place.demo} target="_blank" rel="noopener noreferrer"><img src={place.imageUrl} alt="img" width="100%"/></a>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          <a href={place.demo} target="_blank" rel="noopener noreferrer" className={classes.linka}>{place.title}</a>
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          <i>{place.description}</i>
        </Typography>
        <Typography
          variant="h5"
          component="h5"
          className={classes.titletech}
        >
          Using...
        </Typography>
        <Grid container justify="center">
          <ItemsCarousel items={items} />
        </Grid>
        <br />
        <hr />
        <Typography
          gutterBottom
          variant="h5"
          component="h1"
          className={classes.title}
        >
          <a href={place.demo} target="_blank" rel="noopener noreferrer" className={classes.atitlelink}>&#10149;&nbsp;Live Demo</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
