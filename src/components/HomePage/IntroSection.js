import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography, Container } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'
import Button from '../Button'
// import sectionBg1 from '../../assets/images/common/section-bg-1.jpg'

const useStyles = makeStyles(theme => ({
  IntroSection: {
    padding: '18rem 0 10rem',
    // backgroundImage: `url(${sectionBg1})`,
    // backgroundSize: 'cover',
    // backgroundPosition: '0% 0%',
    height: '90.5rem',
    // backgroundColor: 'red',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  bgImg: {
    zIndex: -10,
  },
  leftSide: {},
  leftSideContainer: {
    [theme.breakpoints.down('md')]: {
      width: 'max-content',
      margin: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  logoContainer: {
    width: '75%',
    // marginBottom: '3rem',
  },
  extraThemedBox: {
    width: '50rem',
    '& h2': {
      color: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('md')]: {
      width: '80rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      marginRight: '1rem',
    },
  },
  rightSide: {
    paddingLeft: '11rem',
    [theme.breakpoints.down('md')]: {
      marginTop: '8rem',
    },
  },
  rightGridItem: {
    padding: '2rem 0rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      marginBottom: '1rem',
      padding: '3rem 6rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 0',
    },
  },
  itemTitle: {
    fontSize: '2.2rem',
    marginBottom: '1.5rem',
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem',
    },
  },
  svgContainer: {
    height: '9rem',
  },
  rightIcon: {
    // width: '9.2rem',
    // margin: '1rem 0',
    width: '5.25rem',
  },
  rightSideItem: {
    paddingLeft: '3rem',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  leftSideItem: {
    paddingRight: '3rem',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  extraButtonClass: {
    [theme.breakpoints.down('md')]: {
      margin: '-2rem auto 0',
    },
  },
  safeIcon: {
    // [theme.breakpoints.down('xs')]: {
    //   transform: 'translateX(1.5rem)',
    // },
  },
  itemText: {
    fontSize: '1.3rem',
  },
}))

const IntroSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   query {
  //     philosophyLogo: file(name: { eq: "about-philosophy-logo" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 400, maxHeight: 430, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     safeIcon: file(name: { eq: "about-philosophy-safe" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 110, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     supportiveIcon: file(name: { eq: "about-philosophy-supportive" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 110, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     effectiveIcon: file(name: { eq: "about-philosophy-effective" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 110, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //     agileIcon: file(name: { eq: "about-philosophy-agile" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 110, quality: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  const atLgUp = useMediaQuery(theme.breakpoints.up('lg')) // 960 and above

  return (
    <div className={classes.IntroSection}>
      <StaticImage
        src="../../images/bg-1.jpg"
        alt="section background"
        className={classes.bgImg}
        objectPosition="top right"
      />
      <Container>
        <Grid container className={classes.gridContainer}>
          <Grid item className={classes.leftSide} xs={12} lg={6}>
            <div className={classes.leftSideContainer}>
              <div className={classes.logoContainer}>
                {/* <StaticImage
                  src="../../images/multi-color-logo.png"
                  alt="Philosophy Logo"
                  placeholder="none"
                /> */}
              </div>
              <ThemedContentBox
                title={<>Welcome to Finkels Alterations</>}
                extraClass={classes.extraThemedBox}
              >
                <Typography
                  variant="body1"
                  className={classes.contentText}
                  gutterBottom
                >
                  For the fashion-forward, Tailor House provides easy and
                  reliable tailoring and garment reconstruction services.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.contentText}
                  gutterBottom
                >
                  Our team is dedicated to honoring personal style and
                  delivering the perfect fit so clients always look and feel
                  their best.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.contentText}
                  gutterBottom
                >
                  We have worked in factories, laundromats, and apprenticed with
                  tailors, designers and manufacturers to learn the trade. We
                  have researched our craft learning from the founders of our
                  industry how to define excellence in fashion.
                </Typography>
              </ThemedContentBox>
              <Button
                isLink
                to="/services"
                text="Our Services"
                extraClass={classes.extraButtonClass}
              />
            </div>
          </Grid>
          <Grid item className={classes.rightSide} xs={12} lg={6}>
            <Grid container className={classes.rightGridContainer}>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.leftSideItem)}
                xs={12}
                sm={6}
              >
                <div className={classes.svgContainer}>
                  <StaticImage
                    // src="../../images/svgs/suit.svg"
                    src="../../images/svgs/new-logo.svg"
                    alt="Philosophy Logo"
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder="none"
                  />
                </div>
                <Typography variant="h3" className={classes.itemTitle}>
                  For Men
                </Typography>
                <Typography variant="body1" className={classes.itemText}>
                  From suits to pants to vests, we tailor everything men need to
                  look their best.
                </Typography>
              </Grid>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.rightSideItem)}
                xs={12}
                sm={6}
              >
                <div className={classes.svgContainer}>
                  <StaticImage
                    src="../../images/svgs/dress.svg"
                    alt="Philosophy Logo"
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder="none"
                  />
                </div>
                <Typography variant="h3" className={classes.itemTitle}>
                  For Women
                </Typography>
                <Typography variant="body1" className={classes.itemText}>
                  We tailor everything a woman could possibly want or need
                  changed for her wardrobe.
                </Typography>
              </Grid>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.leftSideItem)}
                xs={12}
                sm={6}
              >
                <div className={classes.svgContainer}>
                  <StaticImage
                    src="../../images/svgs/sewing-machine.svg"
                    alt="Philosophy Logo"
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder="none"
                  />
                  {/* <Img
                    fluid={data.agileIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  /> */}
                </div>
                <Typography variant="h3" className={classes.itemTitle}>
                  Alterations
                </Typography>
                <Typography variant="body1" className={classes.itemText}>
                  We perform high quality, high-end alterations for almost any
                  piece of clothing.
                </Typography>
              </Grid>
              <Grid
                item
                className={clsx(classes.rightGridItem, classes.rightSideItem)}
                xs={12}
                sm={6}
              >
                <div className={classes.svgContainer}>
                  <StaticImage
                    src="../../images/svgs/needle.svg"
                    alt="Philosophy Logo"
                    className={clsx(classes.rightIcon, classes.safeIcon)}
                    placeholder="none"
                  />
                  {/* <Img
                    fluid={data.supportiveIcon.childImageSharp.fluid}
                    className={classes.rightIcon}
                  /> */}
                </div>
                <Typography variant="h3" className={classes.itemTitle}>
                  Custom Clothing
                </Typography>
                <Typography variant="body1" className={classes.itemText}>
                  Everyone is different. That's why we think your clothes should
                  be made just for you.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default IntroSection
