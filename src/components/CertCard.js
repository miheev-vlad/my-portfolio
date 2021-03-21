import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 260,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5rem',
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
});

export default function CertCard({ cert }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={cert.imageUrl} alt="img" width="100%"/>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classes.desc}
        >
          {cert.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
