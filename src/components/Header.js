import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import Title from 'react-titles/Title2';
import avatar from '../avatar.png';
import Typed from 'react-typed';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    cursor: 'pointer',
    textShadow: '0.2em 0.2em 0.3em black',
    fontSize: '1.5rem',
  },
  icon: {
    color: '#ffd700',
    fontSize: '2rem',
  },
  colorText: {
    color: '#ffd700',
  },
  container: {
    textAlign: 'center',
    margin: 'auto',
  },
  title: {
    color: '#ffd700',
    fontSize: '2rem',
  },
  goDown: {
    color: '#fff',
    fontSize: '5rem',
  },
  avatar: {
    marginTop: '20px',
    width: theme.spacing(20),
    height: theme.spacing(20),
    borderRadius: '30px',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <Scroll to="header" smooth={true}>
              My<span className={classes.colorText}>Portfolio</span>
            </Scroll>
          </h1>
          <IconButton className={classes.iconbtn}>
            <Scroll to="projects" smooth={true}>
              <AppsIcon className={classes.icon} />
            </Scroll>
          </IconButton>
          <IconButton className={classes.iconbtn}>
            <Scroll to="education" smooth={true}>
              <SchoolIcon className={classes.icon} />
            </Scroll>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1500 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <Title size="210" text1="FULL STACK" text2="JS DEVELOPER" open={true} />
          <br />
          <img className={classes.avatar} src={avatar} alt="me" />
          <h1 className={classes.title}>
            <Typed
              strings={["Hi, I'm Vlad!", "Welcome to my site!"]}
              typeSpeed={50}
              backSpeed={70}
              loop
            />
          </h1>
          <Scroll to="projects" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
