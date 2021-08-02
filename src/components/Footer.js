import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography, Hidden } from '@material-ui/core'
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  footer: {
    height: '56rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    color: theme.palette.common.gray1,
    padding: '12rem 0 16rem',
    [theme.breakpoints.down('sm')]: {
      padding: '10rem 0 0',
      height: '72rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '89rem',
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
  topLogoContainer: {
    width: '40%',

    margin: '-1rem auto 3rem',
  },
  logoContainer: {
    width: '25.5rem',
    marginLeft: '15rem',
    marginTop: '-0.5rem',
    '@media (max-width: 1645px)': {
      width: '22rem',
      marginLeft: '7rem',
      marginTop: '-3rem',
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
  footerColumnTitle: {
    fontSize: '1.75rem',
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    marginBottom: '0.75rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      marginTop: '5rem',
    },
  },
  footerColumn: {
    color: theme.palette.common.gray1,
    textTransform: 'uppercase',
    fontSize: '1.4rem',
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
    marginTop: '12rem',
    // width: 'max-content',
    // marginLeft: 'auto',
    fontSize: '1.25rem',
    [theme.breakpoints.down('xs')]: {
      margin: '5rem auto 0',
      textAlign: 'center',
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
  columnPadding: {
    paddingLeft: '6rem',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  footerLink: {
    marginBottom: '0.25rem',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  telLink: {
    fontSize: '1.2em',
    marginTop: '0.5rem',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  footerUl: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'center',
      marginTop: '3rem',
      '& a': {
        marginLeft: '1.4rem',
        // letterSpacing: '0.5px',
      },
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
        <Hidden mdUp>
          <div className={classes.topLogoContainer}>
            <StaticImage
              src="../images/logo.png"
              alt="Logo"
              placeholder="none"
            />
          </div>
        </Hidden>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={4} md={3} className={classes.columnPadding}>
            <h4 variant="body1" className={classes.footerColumnTitle}>
              Explore
            </h4>
            <Typography variant="body1" className={classes.footerColumn}>
              <ul className={classes.footerUl}>
                <li>
                  <Link to="/" className={classes.footerLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={classes.footerLink}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className={classes.footerLink}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={classes.footerLink}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={classes.footerLink}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={3}>
            <h4 variant="body1" className={classes.footerColumnTitle}>
              Shop Hours
            </h4>
            <Typography variant="body1" className={classes.footerColumn}>
              Monday - 10:30am - 4:45pm <br />
              Tuesday - 10:30am - 4:45pm <br />
              Wednesday - 10:30am - 4:45pm <br />
              Thursday - 10:30am - 4:45pm <br />
              Friday - 10:30am - 4:45pm <br />
              Saturday - CLOSED <br />
              Sunday - CLOSED
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4} md={3} className={classes.columnPadding}>
            <h4 variant="body1" className={classes.footerColumnTitle}>
              Contact Us
            </h4>

            <Typography variant="body1" className={classes.footerColumn}>
              565 Lexington Avenue <br />
              New York, New York 10021 <br />
              <a href="tel:123-456-7890" className={classes.telLink}>
                949.215.2100
              </a>
            </Typography>
          </Grid>

          <Hidden smDown>
            <Grid item xs={12} md={3}>
              <div className={classes.logoContainer}>
                <StaticImage
                  src="../images/logo.png"
                  alt="Logo"
                  placeholder="none"
                />
              </div>
            </Grid>
          </Hidden>

          {/* <Grid item xs={12} sm={12}>
            <div className={classes.socialIconsContainer}>
              <FaFacebookF className={classes.socialIcon} />
              <FaInstagram className={classes.socialIcon} />
              <FaYoutube className={classes.socialIcon} />
              <FaLinkedin className={classes.socialIcon} />
            </div>
          </Grid> */}
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
