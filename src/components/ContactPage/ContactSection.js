import React from 'react'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import {
  Grid,
  Typography,
  Container,
  useTheme,
  Hidden,
} from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import { ImLocation } from 'react-icons/im'

const useStyles = makeStyles(theme => ({
  ContactSection: {
    padding: '16rem 0 19rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: '12rem 0 4rem',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '8rem 0 3rem',
    },
  },
  bgImg: {
    zIndex: -10,
  },
  leftGridItem: {
    paddingRight: '3rem',
    '& iframe': {
      filter: 'grayscale(50%)',
      maxHeight: '35rem',
      maxWidth: '100%',
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  rightGridItem: {
    paddingLeft: '3.6rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  title: {
    fontWeight: 300,
    fontSize: '3rem',
    color: theme.palette.secondary.light,
    marginBottom: '1rem',
  },
  title2: {
    fontWeight: 400,
    fontSize: '1.8rem',
    color: theme.palette.secondary.light,
    marginTop: '4rem',
  },
  address: {
    fontStyle: 'normal',
  },
  tel: {
    fontSize: '2rem',
    transition: 'all 0.2s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  locationIcon: {
    fontSize: '2rem',
    marginRight: '0.75rem',
  },
  smDownGridItem: {
    marginTop: '8rem',
    marginBottom: '5rem',
    '& iframe': {
      filter: 'grayscale(50%)',
      maxHeight: '35rem',
      maxWidth: '100%',
    },
  },
}))

const ContactSection = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <section className={classes.ContactSection}>
      <StaticImage
        src="../../images/bg-1.jpg"
        alt="Background"
        className={classes.bgImg}
        objectPosition="0% 0%"
      />

      <Container>
        <Grid container>
          <Hidden smDown>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5985153957304!2d-73.89728968422406!3d40.74885904329598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0421bde3e5%3A0xd9525333c6e64414!2s70-09%2037th%20Ave%2C%20Flushing%2C%20NY%2011372!5e0!3m2!1sen!2sus!4v1629610944396!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6} className={classes.rightGridItem}>
            <h2 className={classes.title}>
              <ImLocation className={classes.locationIcon} />
              Location
            </h2>
            <Typography>
              Tailor House is located in the Miami Design District on the second
              floor of the Palm Court, next to St. Roch Market, just past the
              swings. Easiest access is via the escalator between BVLGARI and
              Tourbillon Boutique.
            </Typography>
            <address className={classes.address}>
              <h3 className={classes.title2}>Phone</h3>
              <a href="tel:123-456-7890" className={classes.tel}>
                (123) 456-7890
              </a>
              <h3 className={classes.title2}>Address</h3>
              <Typography>
                Miami Design District Palm Court <br />
                140 NE 39th St, Suite #239 <br />
                Miami, FL 33137
              </Typography>
            </address>
          </Grid>
          <Hidden mdUp>
            <Grid item xs={12} md={6} className={classes.smDownGridItem}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5985153957304!2d-73.89728968422406!3d40.74885904329598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f0421bde3e5%3A0xd9525333c6e64414!2s70-09%2037th%20Ave%2C%20Flushing%2C%20NY%2011372!5e0!3m2!1sen!2sus!4v1629610944396!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </section>
  )
}

export default ContactSection
