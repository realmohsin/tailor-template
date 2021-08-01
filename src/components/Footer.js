import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography, Hidden } from '@material-ui/core'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  footer: {
    height: '66rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    color: theme.palette.common.gray1,
    padding: '16rem 0',
    [theme.breakpoints.down('sm')]: {
      padding: '10rem 0 0',
      height: '72rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '88rem',
      padding: '9rem 0 4rem',
    },
  },
  footerBg: {
    zIndex: -10,
  },
  topDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '8rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  logoContainer: {
    width: '14.5rem',
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  authLinksContainer: {
    display: 'flex',
  },
  authLink: {
    marginRight: '8rem',
    textTransform: 'uppercase',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    transition: '0.4s all',
    '&:hover': {
      color: 'white',
    },
  },
  gridContainer: {
    marginTop: '5rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0.5rem',
    },
  },
  addressTitle: {
    fontSize: '1.55rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginTop: '5rem',
    },
  },
  address: {
    color: theme.palette.common.gray1,
    textTransform: 'uppercase',
    fontSize: '1.3rem',
    fontWeight: 300,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  socialIconsContainer: {
    marginTop: '5rem',
    width: 'max-content',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      marginTop: '12rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '7rem auto 0',
      transform: 'translateX(-1.5rem)',
    },
  },
  socialIcon: {
    fontSize: '3rem',
    marginLeft: '3rem',
    transition: '0.4s all',
    cursor: 'pointer',
    '&:hover': {
      color: 'white',
    },
  },
  bottomDiv: {
    marginTop: '7rem',
    width: 'max-content',
    marginLeft: 'auto',
    fontSize: '1.25rem',
    [theme.breakpoints.down('xs')]: {
      margin: '3rem auto 0',
    },
  },
  privacyLink: {
    display: 'inline-block',
    marginRight: '3rem',
    textTransform: 'uppercase',
    transition: '0.4s all',
    '&:hover': {
      color: 'white',
    },
  },
}))

const Footer = props => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <StaticImage
        src="../images/footer-bg.jpg"
        className={classes.footerBg}
        objectPosition="top right"
      />
      <Container>
        <div className={classes.topDiv}>
          <Hidden smDown>
            <div className={classes.authLinksContainer}>
              <Link to="/" className={classes.authLink}>
                Employee Login
              </Link>
              <Link to="/" className={classes.authLink}>
                Subcontractors
              </Link>
            </div>
          </Hidden>
          <div className={classes.logoContainer}>
            <StaticImage
              src="../images/logo.png"
              alt="Logo"
              placeholder="none"
            />
          </div>
        </div>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body1" className={classes.addressTitle}>
              New York
            </Typography>
            <Typography variant="body1" className={classes.address}>
              565 Lexington Avenue <br />
              New York, New York 10021 <br />
              212.245.9200
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body1" className={classes.addressTitle}>
              Los Angeles
            </Typography>
            <Typography variant="body1" className={classes.address}>
              2445 Mccabe Way <br />
              Irvine, California 92512 <br />
              949.215.2100
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="body1" className={classes.addressTitle}>
              Connecticut
            </Typography>
            <Typography variant="body1" className={classes.address}>
              650 Danbury Road <br />
              Ridgefield, Connecticut 06877 <br />
              212.245.2000
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <div className={classes.socialIconsContainer}>
              <FaFacebookF className={classes.socialIcon} />
              <FaInstagram className={classes.socialIcon} />
              <FaYoutube className={classes.socialIcon} />
              <FaLinkedin className={classes.socialIcon} />
            </div>
          </Grid>
        </Grid>
        <div className={classes.bottomDiv}>
          <Hidden xsDown>
            <Link to="/" className={classes.privacyLink}>
              Privacy Policy
            </Link>
          </Hidden>
          <span>© FINKELS ALTERATIONS, LLC</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
