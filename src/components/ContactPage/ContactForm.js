import React from 'react'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import Button from '../Button'
import { BiMailSend } from 'react-icons/bi'

const useStyles = makeStyles(theme => ({
  contactFormSection: {
    padding: '4rem 0 16rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '8rem 0 14rem',
    },
  },
  bgImg: {
    zIndex: -10,
  },
  leftGridItem: {
    paddingRight: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0,
    },
  },
  rightGridItem: {
    paddingLeft: '3rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },
  label: {
    display: 'block',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.4rem',
    },
  },
  input: {
    outline: 'none',
    border: 'none',
    height: '4.2rem',
    fontSize: '1.7rem',
    paddingLeft: '2.2rem',
    marginBottom: '3rem',
    width: '100%',
    boxShadow: theme.shadows[1],
    [theme.breakpoints.down('md')]: {
      height: '5rem',
    },
  },
  title: {
    background: theme.palette.primary.main,
    padding: '2.5rem 0',
    fontSize: '2.7rem',
    margin: '3rem 0 7rem',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    wordSpacing: '2px',
    // paddingLeft: '3rem',
    textAlign: 'center',
    color: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      fontSize: '2rem',
      paddingLeft: 0,
    },
  },
  message: {
    width: '100%',
    height: 'auto',
    padding: '2rem',
  },
  extraButtonClass: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  leftMailIcon: {
    transform: 'translateY(5px)',
    marginRight: '2rem',
  },
  rightMailIcon: {
    transform: 'translateY(5px)',
    marginLeft: '1.5rem',
  },
}))

const ContactFormSection = props => {
  const classes = useStyles()

  return (
    <section className={classes.contactFormSection}>
      <StaticImage
        src="../../images/bg-1.jpg"
        alt="Background"
        className={classes.bgImg}
        objectPosition="0% 0%"
      />
      <Container maxWidth="md">
        <Typography variant="h2" className={classes.title}>
          <BiMailSend className={classes.leftMailIcon} />
          Send Us A Message
          <BiMailSend className={classes.rightMailIcon} />
        </Typography>
        <form action="https://formspree.io/f/xnqokpoq" method="POST">
          <Grid container>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              <label htmlFor="name" className={classes.label}>
                Name*
              </label>
              <input
                type="text"
                id="name"
                className={classes.input}
                name="name"
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightGridItem}>
              <label htmlFor="email" className={classes.label}>
                Email*
              </label>
              <input
                type="email"
                id="email"
                className={classes.input}
                name="email"
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.leftGridItem}>
              <label htmlFor="company" className={classes.label}>
                Company
              </label>
              <input
                type="text"
                id="company"
                className={classes.input}
                name="company"
              />
            </Grid>
            <Grid item xs={12} md={6} className={classes.rightGridItem}>
              <label htmlFor="subject" className={classes.label}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={classes.input}
                name="subject"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <label htmlFor="message" className={classes.label}>
                Your Message
              </label>
              <textarea
                rows={9}
                id="message"
                className={clsx(classes.input, classes.message)}
              ></textarea>
            </Grid>
          </Grid>
          <Button text="Send Mail" extraClass={classes.extraButtonClass} />
        </form>
      </Container>
    </section>
  )
}

export default ContactFormSection
