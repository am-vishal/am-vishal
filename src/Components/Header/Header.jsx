import {Grid, Button, Typography} from '@material-ui/core';
import HeaderStyles from './HeaderStyles';
import './stars.scss';

const Header = () => {
  const classes = HeaderStyles();
  return (
    <>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.rootGrid}>
            <Typography component="p">
              I am Vishal
              <span style={{margin: 'auto 6px', fontSize: '2.3vw'}}>|</span>
              <span>Front-End Developer</span>
            </Typography>
          </Grid>
          {/* <Grid item xs={12} className={classes.rootGrid}>
            <Button>Know More</Button>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
};

export default Header;
