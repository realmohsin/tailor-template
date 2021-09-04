import React from 'react'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container, Typography } from '@material-ui/core'
import ThemedContentBox from './ThemedContentBox'
// import ContentSectionBg from '../../assets/images/contact-page/contact-subcontractors-bg.jpg'
import Button from './Button'

const useStyles = makeStyles(theme => ({
  ContentSection: {
    paddingTop: '24rem',
    // backgroundImage: `url(${ContentSectionBg})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    height: '93.4rem',
    color: 'white',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '14rem',
      height: '88rem',
    },
  },
  bgImg: {
    zIndex: -10,
  },
  extraThemedBox: {
    [theme.breakpoints.down('xs')]: {
      marginRight: '1.5rem',
    },
  },
  extraButtonClass: {
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  filter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(to left, rgba(0,33,51,0.65) 10%, rgba(0,33,51,0.85) 50%, rgba(0,33,51,0) 100%)',
    position: 'absolute',
    zIndex: -10,
  },
  contentOnLeft: {
    background:
      'linear-gradient(to right, rgba(0,33,51,0.65) 10%, rgba(0,33,51,0.85) 25%, rgba(0,33,51,0) 100%)',
  },
}))

const ContentSection = ({ contentOnRight }) => {
  const classes = useStyles()

  return (
    <section className={classes.ContentSection}>
      <StaticImage
        src="../images/hero-img-2.jpg"
        alt="Background"
        className={classes.bgImg}
        objectPosition="0% 0%"
      />
      <div
        className={clsx(
          classes.filter,
          !contentOnRight && classes.contentOnLeft
        )}
      />
      <Container>
        <Grid container>
          {contentOnRight && <Grid item xs={0} md={0} lg={6} />}
          <Grid item xs={12} md={12} lg={6}>
            <ThemedContentBox
              title="Strong Subcontractor Relationships Equal Success"
              subtitle="Partnerships"
              onDarkBg
              extraClass={classes.extraThemedBox}
            >
              <Typography variant="body1" gutterBottom>
                Our subcontractors are the backbone of our business. We make a
                significant investment in order to secure strong and mutually
                rewarding relationships with our subcontractors. These
                relationships help maintain Schimenti as a “best-in-class”
                general contractor. We take great pride in the strength of our
                subcontractor alliances.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Subcontractors who retain dedicated and skilled staff,
                incorporate best practice processes, and maintain a high level
                of commitment to working together collaboratively are rewarded
                with repeat business.
              </Typography>
            </ThemedContentBox>
            <Button
              isLink
              text="Inquire Now"
              extraClass={classes.extraButtonClass}
            />
          </Grid>
          {!contentOnRight && <Grid item xs={0} md={0} lg={6} />}
        </Grid>
      </Container>
    </section>
  )
}

export default ContentSection
