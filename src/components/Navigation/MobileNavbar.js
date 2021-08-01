import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles, Grid } from '@material-ui/core'
import Toggle from './Toggle'

const useStyles = makeStyles(theme => ({
  mobileNavbar: {
    backgroundColor: theme.palette.secondary.dark,
    padding: '0.15rem 0.95rem',
    position: 'fixed',
    top: 0,
    boxShadow: theme.shadows[3],
    zIndex: 100,
  },
  ctaButton: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: 1.2,
      marginLeft: '1rem',
    },
  },
  logoContainer: {
    height: '100%',
    width: '7.5rem',
  },
}))

const MobileCtaNavbar = ({ toggleSideDrawer }) => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.mobileNavbar}
    >
      <div className={classes.logoContainer}>
        <StaticImage
          src="../../images/logo-no-title.png"
          alt="Logo"
          className={classes.logo}
        />
      </div>
      <Toggle onToggle={toggleSideDrawer} />
    </Grid>
  )
}

export default MobileCtaNavbar
