import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import anime from 'animejs'

// This component is an entire hero section, unless asBanner prop is used

const useStyles = makeStyles(theme => ({
  heroBanner: {
    height: '32rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    textAlign: 'center',
    position: 'relative',
    '& > .gatsby-image-wrapper': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: -10,
    },
    [theme.breakpoints.down('sm')]: {
      height: '24rem',
    },
    [theme.breakpoints.down('sm')]: {
      height: '20rem',
    },
  },
  withBgColor: {
    background: theme.palette.secondary.main,
  },
  bannerTitle: {
    color: theme.palette.primary.main,
    fontSize: '5.6rem',
    // fontWeight: 300,
    zIndex: '10',
    textShadow: 'black 0px 0px 3px',
    paddingTop: '4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem',
    },
  },
  heroImgBanner: {
    // filter: 'grayscale(100%)',
    // zIndex: -10,
    // height: '100%',
  },
  filter: {
    background:
      'linear-gradient(to right, rgba(0,33,51,0.9) 10%, rgba(0,33,51,0.75) 25%, rgba(0,33,51,0) 100%)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: '100%',
  },
}))

const HeroBanner = ({ heroImgData, title }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.heroBanner, !heroImgData && classes.withBgColor)}
    >
      <GatsbyImage
        image={getImage(heroImgData)}
        alt="Interior Display"
        className={classes.heroImgBanner}
      />
      <div className={classes.filter} />
      <h1 className={classes.bannerTitle}>{title}</h1>
    </div>
  )
}

export default HeroBanner
