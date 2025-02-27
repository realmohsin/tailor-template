import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import anime from 'animejs'

// This component is an entire hero section, unless asBanner prop is used

const useStyles = makeStyles(theme => ({
  heroSection: {
    overflowY: 'hidden',
    height: '94vh',
    position: 'relative',
    transition: 'all 2s',
  },
  heroImg: {
    height: '100%',
    // filter: 'grayscale(100%)',
  },
  asBanner: {
    height: '25rem',
    // position: 'static',
    background: theme.palette.secondary.main,
    textAlign: 'center',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [theme.breakpoints.down('sm')]: {
      height: '10rem',
    },
  },
  bannerTitle: {
    marginTop: '12.5rem',
    color: theme.palette.primary.main,
    fontSize: '4.8rem',
    fontWeight: 300,
  },
  initialOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1B1B25',
    zIndex: '200',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: '24rem',
    padding: '1rem',
    opacity: 0,
    transform: 'scale(0.2)',
  },
  heroImgBanner: {
    // filter: 'grayscale(100%)',
    zIndex: -10,
  },
}))

const CenteredLogo = () => {
  const classes = useStyles()

  return (
    <div id="logo-container" className={classes.logoContainer}>
      <StaticImage src="../images/logo.png" alt="Logo" placeholder="none" />
    </div>
  )
}

const HeroSection = ({ heroImgData, children, asBanner, homePage }) => {
  const classes = useStyles()

  const [overlayExists, setOverlayExists] = useState(true)

  const animate = () => {
    const timeline = anime.timeline({
      complete: () => setOverlayExists(false),
    })

    timeline
      .add({
        targets: '#logo-container',
        delay: 1000,
        duration: 2000,
        easing: 'easeInQuad',
        opacity: 1,
        scale: 1.8,
      })
      .add({
        targets: '#logo-container',
        delay: 500,
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.5,
      })
      .add({
        targets: '#initial-overlay',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 0,
        // scale: 0.1
      })
  }

  useEffect(() => {
    if (asBanner) return
    animate()
  }, [])

  if (asBanner) {
    return (
      <div className={clsx(classes.heroSection, classes.asBanner)}>
        <GatsbyImage
          image={getImage(heroImgData)}
          alt="Interior Display"
          className={classes.heroImgBanner}
        />
        <h1 className={classes.bannerTitle}>{asBanner}</h1>
      </div>
    )
  }

  return (
    <>
      <section className={classes.heroSection}>
        <GatsbyImage
          image={getImage(heroImgData)}
          alt="Interior Display"
          className={classes.heroImg}
        />
        {children}
      </section>
      {homePage && overlayExists && (
        <div id="initial-overlay" className={classes.initialOverlay}>
          <CenteredLogo />
        </div>
      )}
    </>
  )
}

export default HeroSection
