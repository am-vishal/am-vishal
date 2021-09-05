import React from 'react';
import {Grid, Button, Typography, Container} from '@material-ui/core';
import javascript from 'Images/javascript.svg';
import react from 'Images/react.svg';
import redux from 'Images/redux.svg';
import materialui from 'Images/materialui.svg';
import styledcomponents from 'Images/styledcomponents.webp';
import bootstrap from 'Images/bootstrap.svg';
import css from 'Images/css3.svg';
import html5 from 'Images/html5.svg';
import datastructure from 'Images/datastructure.webp';
import firebase from 'Images/firebase.svg';
import git from 'Images/git.svg';
import github from 'Images/github.svg';
import {makeStyles} from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

import GithubIcon from 'Images/github.svg';
import LinkedInIcon from 'Images/linkedin.svg';
import CodepenIcon from 'Images/codepenLogo.svg';
import ResumeLogo from 'Images/resume.webp';

const AboutStyles = makeStyles(() => ({
  ImgContainer: {
    // background: '#132c33',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    '& img': {
      // margin: '1em',
      margin: '1em !important',
      animation: `$skew 3s infinite`,
      transition: '1s ease-in-out',
      // transform: 'skew(15deg)',
      animationDirection: 'alternate',
    },
  },
  // '@keyframes skew': {
  //   '0%': {
  //     transform: 'skewX(15deg)',
  //   },
  //   '100%': {
  //     transform: 'skewX(-15deg)',
  //   },
  // },
  SocialLinks: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
      width: '2.2em',
      margin: '2em 3em',
    },
  },
}));

const About = () => {
  const classes = AboutStyles();

  return (
    <>
      <Container>
        <Typography variant="h3" align="center">
          <p className="about-me" style={{display: 'inline-block', fontFamily: 'Bradley Hand, cursive'}}>
            <strong>About Me</strong>
          </p>
        </Typography>
        <Grid item xs={12} spacing={2} className={classes.ImgContainer}>
          <Grid item xs={1}>
            <Tooltip title="JavaScript" arrow>
              <img src={javascript} alt="javascript-icon" height="50px" width="50px" style={{transform: 'translate(10%, 20%)'}} />
            </Tooltip>
            <Tooltip title="ReactJS" arrow>
              <img src={react} alt="react-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Redux" arrow>
              <img src={redux} alt="redux-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="HTML5" arrow>
              <img src={html5} alt="html5-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="CSS" arrow>
              <img src={css} alt="css-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Bootstrap" arrow>
              <img src={bootstrap} alt="bootstrap-icon" height="50px" width="50px" />
            </Tooltip>
          </Grid>
          <Grid item xs={8}>
            <span style={{display: 'grid', placeItems: 'center'}}>
              <img
                src="https://i.postimg.cc/KcLRZzys/Iccc-MG-20200228-165103-662.jpg"
                style={{borderRadius: '50%', height: '12em', width: '12em', background: 'cover', objectFit: 'cover'}}
                alt="vishal"
              />
            </span>
            <Typography align="center" variant="h5" style={{padding: '0.5em'}}>
              Vishal Kumar
            </Typography>
            <Typography align="center" variantMapping="p" style={{color: 'black'}}>
              Hello, I am a Front-End Developer, I enjoy solving real-world problems with technology. I create static and dynamic websites,
              but i love to create dynamic website because it can be change in future and that would be more prettier... I focus on the
              structure and design of web pages, striking a balance between functional and aesthetic design and ensuring web design is
              optimized for difference difference devices.
            </Typography>
            <Grid item xs={12} style={{display: 'grid', placeItems: 'center', marginBottom: '0.5vw'}}>
              <a
                href="https://drive.google.com/file/d/1mcYPvzfIkYGRvWiSVpciZ8yFtpUBCzNV/view?usp=sharing"
                rel="noreferrer noopener"
                target="_blank"
              >
                <img src={ResumeLogo} alt="resume-logo" height="50px" width="50px" style={{borderRadius: '15%'}} />
              </a>
            </Grid>
          </Grid>

          <Grid item xs={1}>
            <Tooltip title="Material UI" arrow>
              <img src={materialui} alt="materialui-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Styled Components" arrow>
              <img src={styledcomponents} alt="styledcomponents-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Data Structure" arrow>
              <img src={datastructure} alt="datastructure-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Git" arrow>
              <img src={git} alt="git-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Github" arrow>
              <img src={github} alt="github-icon" height="50px" width="50px" />
            </Tooltip>
            <Tooltip title="Firebase" arrow>
              <img src={firebase} alt="firebase-icon" height="50px" width="50px" />
            </Tooltip>
          </Grid>
        </Grid>
        <p style={{textAlign: 'center', width: '100%', color: 'red'}}>Contact Me</p>
        <Grid item xs={12} style={{display: 'grid', placeItems: 'center'}}>
          <div className={classes.SocialLinks}>
            <a href="https://github.com/am-vishal" rel="noreferrer noopener" target="_blank">
              <img src={GithubIcon} alt="Github-Icon" />
            </a>
            <a href="https://www.linkedin.com/in/amvishal/" rel="noreferrer noopener" target="_blank">
              <img src={LinkedInIcon} alt="LinkedIn-Icon" />
            </a>
            <a href="https://codepen.io/am_vishal" rel="noreferrer noopener" target="_blank">
              <img src={CodepenIcon} alt="Codepen-Icon" />
            </a>
          </div>
        </Grid>
      </Container>
    </>
  );
};

export default About;
