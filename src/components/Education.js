import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from 'react-titles/Title6';
import certs from '../static/certs';
import CertCard from './CertCard';

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
    <div id="education">
      <div className={classes.animtitle}>
        <Title size="280" text1="Sertificates" open={true} />
      </div>
      <div className={classes.root}>
        <div>
          <CertCard cert={certs[0]} />
          <CertCard cert={certs[3]} />
        </div>
        <div>
          <CertCard cert={certs[2]} />
          <CertCard cert={certs[1]} />
        </div>
      </div>
    </div>
  );
}