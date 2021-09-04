import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import anime from 'animejs'
import { Container } from '@material-ui/core'
import Button from './Button'

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
  heroGrid: {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    justifyItems: 'end',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      'linear-gradient(to right, rgba(0,33,51,0.9) 10%, rgba(0,33,51,0.75) 25%, rgba(0,33,51,0) 100%)',
  },
  heroContent: {
    width: '65%',
    color: 'white',
    borderLeft: '1px solid white',
    paddingLeft: '2.5rem',
  },
  heroTitle: {
    fontSize: '4rem',
    lineHeight: 1.2,
    marginBottom: '1.8rem',
    textShadow: 'black 0px 0px 7px',
  },
  heroBlurb: {
    fontSize: '1.8rem',
    lineHeight: 1.5,
    marginBottom: '2rem',
    textShadow: 'black 0px 0px 7px',
  },
  heroButton: {},
  // contentGrid: {
  //   display: 'grid',
  //   height: '100%',
  //   gridTemplateColumns: '1fr 1fr',
  //   alignItems: 'center',
  //   justifyItems: 'center',
  // },
  asBanner: {
    height: '25rem',
    position: 'static',
    background: theme.palette.secondary.main,
    textAlign: 'center',
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
}))

const CenteredLogo = () => {
  const classes = useStyles()

  return (
    <div id="logo-container" className={classes.logoContainer}>
      <StaticImage src="../images/logo.png" alt="Logo" placeholder="none" />
    </div>
  )
}

const HeroSection2 = ({ heroImgData, children, asBanner, homePage }) => {
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
        <div className={classes.heroGrid}>
          {/* <Container> */}
          {/* <div className={classes.contentGrid}> */}
          <div className={classes.heroContent}>
            <h1 className={classes.heroTitle}>
              New Immigrant Community Empowerment (NICE)
            </h1>
            <p className={classes.heroBlurb}>
              COVID-19 has devastated immigrant communities across NYC. Since
              March, we have distributed over $2 million in cash assistance and
              80,000 meals. Help us do more.
            </p>
            <Button text="donate now" isLink />
          </div>
          <div />
          {/* </div> */}
          {/* </Container> */}
        </div>
      </section>
      {homePage && overlayExists && (
        <div id="initial-overlay" className={classes.initialOverlay}>
          <CenteredLogo />
        </div>
      )}
    </>
  )
}

export default HeroSection2
