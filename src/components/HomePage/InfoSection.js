import React from 'react'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container, useTheme } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  infoSection: {
    padding: '16rem 0 14rem',
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
  },
  rightImgContainer: {
    width: '38rem',
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: '0 auto',
    },
  },
  extraThemedBoxClass: {
    width: '70rem',
    [theme.breakpoints.down('md')]: {
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 9rem',
    },
  },
  statContainer: {
    padding: '8rem 0 15rem',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '4rem',
    },
  },
  statGridItem: {
    borderLeft: '1px solid #ccc',
    padding: '2rem 5rem',
    '&:last-of-type': {
      borderRight: '1px solid #ccc',
      [theme.breakpoints.down('sm')]: {
        borderRight: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'none',
      borderBottom: '1px solid #ccc',
      marginBottom: '2rem',
    },
  },
  stat: {
    fontSize: '5.4rem',
    fontWeight: 'bold',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '3rem',
    },
  },
  statLabel: {
    textAlign: 'center',
    fontSize: '1.6rem',
  },
  contentPara: {
    fontSize: '1.7rem',
    '&:first-of-type': {
      marginTop: '3rem',
    },
  },
}))

const InfoSection = ({ logoFluid, rightImgFluid }) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <section className={classes.infoSection}>
      <StaticImage
        src="../../images/bg-1.jpg"
        alt="Background"
        className={classes.bgImg}
        objectPosition="0% 0%"
      />

      <Container>
        <Grid container>
          <Grid item xs={12} md={6} lg={8} className={classes.leftGridItem}>
            <ThemedContentBox
              headerImgFluid={logoFluid}
              headerBgColor={theme.palette.secondary.main}
              extraClass={classes.extraThemedBoxClass}
            >
              <div className={classes.content}>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.contentPara}
                >
                  We're dedicated to tailoring your clothes in the shape of you.
                  Whether we need to alter new garments or reconstruct old ones,
                  your clothes should make you feel confident, attractive, and
                  comfortable - thoughtfully reflecting your body type, style or
                  mood.
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  className={classes.contentPara}
                >
                  Tailor House provides perfect-fit tailoring and garment
                  reconstruction, so you can look and feel your best.
                </Typography>
                <Typography
                  gutterBottom
                  variant="body1"
                  className={classes.contentPara}
                >
                  If you haven’t tailored your clothes before, you could be
                  missing out. Spend 5 minutes with our fit experts to learn
                  more about the benefits of tailoring your clothes, and our
                  signature process that ensures a perfect fit. You’ll be amazed
                  at how different you’ll feel.
                </Typography>
              </div>
            </ThemedContentBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className={classes.rightGridItem}>
            <div className={classes.rightImgContainer}>
              <GatsbyImage
                image={getImage(rightImgFluid)}
                alt="Think Safe, Work Safe, Live Safe"
                className={classes.safetyImg}
              />
            </div>
          </Grid>
        </Grid>
        {/* <Grid container className={classes.statContainer}>
          <Grid item className={classes.statGridItem} xs={12} md={4}>
            <p className={classes.stat}>{squareFt}</p>
            <p className={classes.statLabel}>Square Feet</p>
          </Grid>
          <Grid item className={classes.statGridItem} xs={12} md={4}>
            <p className={classes.stat}>{timelineWks}</p>
            <p className={classes.statLabel}>Timeline</p>
          </Grid>
          <Grid item className={classes.statGridItem} xs={12} md={4}>
            <p className={classes.stat}>{clientSince}</p>
            <p className={classes.statLabel}>
              Our Valued Client Since {clientSince}
            </p>
          </Grid>
        </Grid> */}
      </Container>
    </section>
  )
}

export default InfoSection
