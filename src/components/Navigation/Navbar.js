import React from 'react'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  navbarContainer: {
    position: 'fixed',
    width: '100%',
    zIndex: '100',
    padding: '0rem 5rem 0',
    color: 'white',
    background: theme.palette.secondary.dark,
    boxShadow: '0px 5px 5px rgb(46 46 46 / 30%)',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '165rem',
    margin: '0 auto',
    background: 'transparent',
  },
  leftSideContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    color: theme.palette.primary.main,
    fontSize: '2.7rem',
    paddingLeft: '1rem',
    fontWeight: 300,
  },
  logoContainer: {
    width: '8rem',
    padding: '0.7rem',
  },
  navUl: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    fontSize: '1.5rem',
    textShadow: 'black 0px 0px 7px',
    fontWeight: 'bold',
    padding: '0.75rem 0',
    marginLeft: '3.2rem',
    position: 'relative',
    color: '#ccc',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: 0,
      left: 0,
      backgroundColor: theme.palette.primary.main,
      visibility: 'hidden',
      transform: 'scaleX(0)',
      transition: 'all 0.3s ease-in-out 0s',
    },
    '&:hover': {
      color: theme.palette.primary.main,
    },
    '&:hover::before': {
      visibility: 'visible',
      transform: 'scaleX(1)',
    },
  },
  activeLink: {
    color: theme.palette.primary.main,
    '&::before': {
      visibility: 'visible',
      transform: 'scaleX(1)',
    },
  },
}))

const Navbar = () => {
  const classes = useStyles()

  const isActive = ({ isCurrent }) => {
    return isCurrent
      ? { className: clsx(classes.navLink, classes.activeLink) }
      : { className: classes.navLink }
  }

  return (
    <div className={classes.navbarContainer}>
      <nav className={classes.navbar}>
        <div className={classes.leftSideContainer}>
          <div className={classes.logoContainer}>
            <StaticImage
              src="../../images/logo-no-title.png"
              alt="Logo"
              placeholder="none"
            />
          </div>
          <div className={classes.logoText}>Finkels Alterations</div>
        </div>
        <ul className={classes.navUl}>
          <li>
            <Link to="/" getProps={isActive}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" getProps={isActive}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" getProps={isActive}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/gallery" getProps={isActive}>
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link to="/careers" getProps={isActive}>
              Careers
            </Link>
          </li> */}
          <li>
            <Link to="/contact" getProps={isActive}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
