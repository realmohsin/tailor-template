import React from 'react'
import { getImage, StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import { graphql, Link, useStaticQuery, navigate } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Container, useTheme } from '@material-ui/core'
import ThemedContentBox from '../ThemedContentBox'

const useStyles = makeStyles(theme => ({
  ServicesSection: {
    color: '#000000',
    padding: '12rem 0 14rem',
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
  gridItem: {
    paddingLeft: '1.75rem',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  serviceImg: {
    marginTop: '4rem',
    [theme.breakpoints.down('xs')]: {
      marginTop: '8rem',
    },
  },
  serviceTitle: {
    margin: '0.75rem 0 1.5rem',
    fontSize: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  serviceLabel: {
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  servicesList: {
    paddingLeft: '1.5rem',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      paddingLeft: 0,
    },
  },
}))

const ServicesSection = ({ logoFluid, rightImgFluid }) => {
  const classes = useStyles()
  const theme = useTheme()
  const data = useStaticQuery(graphql`
    query {
      serviceDenim: file(name: { eq: "service-denim" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      serviceDress: file(name: { eq: "service-dress" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      serviceDresses: file(name: { eq: "service-dresses" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      serviceOuterwear: file(name: { eq: "service-outerwear" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      servicePants: file(name: { eq: "service-pants" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
      serviceVests: file(name: { eq: "service-vests" }) {
        childImageSharp {
          gatsbyImageData(width: 350)
        }
      }
    }
  `)

  return (
    <section className={classes.ServicesSection}>
      <StaticImage
        src="../../images/bg-1.jpg"
        alt="Background"
        className={classes.bgImg}
        objectPosition="0% 0%"
      />

      <Container>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <GatsbyImage
              image={getImage(data.serviceDenim.childImageSharp)}
              className={classes.serviceImg}
            />
            <h2 className={classes.serviceTitle}>Denim</h2>
            <h3 className={classes.serviceLabel}>Fix</h3>
            <ul className={classes.servicesList}>
              <li>Cuff: repair</li>
              <li>Zipper: repair</li>
              <li>Zipper: replacement</li>
              <li>Button & Rivet: replacement</li>
            </ul>
            <h3 className={classes.serviceLabel}>Fit</h3>
            <ul className={classes.servicesList}>
              <li>Waist: takein/out (center back)</li>
              <li>Waist: takein/out (hip seams)</li>
              <li>Leg: taper</li>
              <li>Leg: raw hem</li>
              <li>Leg: original hem</li>
              <li>Leg: regular hem</li>
            </ul>
            <h3 className={classes.serviceLabel}>Custom & Reconstruction</h3>
            <ul className={classes.servicesList}>
              <li>Distressing</li>
              <li>Paneling</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <GatsbyImage
              image={getImage(data.servicePants.childImageSharp)}
              className={classes.serviceImg}
            />
            <h2 className={classes.serviceTitle}>Pants, Shorts, & Skirts</h2>
            <h3 className={classes.serviceLabel}>Fix</h3>
            <ul className={classes.servicesList}>
              <li>Pockets: remove</li>
              <li>Zipper: fix</li>
              <li>Zipper: replace</li>
            </ul>
            <h3 className={classes.serviceLabel}>Fit</h3>
            <ul className={classes.servicesList}>
              <li>Waist: takein/out</li>
              <li>Cuff: add or repair</li>
              <li>Leg: taper</li>
              <li>Leg: hem reinforcement</li>
              <li>Leg: original hem</li>
              <li>Leg: regular hem</li>
              <li>Leg: hem leather-suede</li>
            </ul>
            <h3 className={classes.serviceLabel}>Custom & Reconstruction</h3>
            <ul className={classes.servicesList}>
              <li>Personal uniform</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <GatsbyImage
              image={getImage(data.serviceDress.childImageSharp)}
              className={classes.serviceImg}
            />
            <h2 className={classes.serviceTitle}>Dress Shirts & Blouses</h2>
            <h3 className={classes.serviceLabel}>Fix</h3>
            <ul className={classes.servicesList}>
              <li>Hole and seam: repair</li>
              <li>Collar: flip</li>
              <li>Button: replace</li>
            </ul>
            <h3 className={classes.serviceLabel}>Fit</h3>
            <ul className={classes.servicesList}>
              <li>Sleeve: taper</li>
              <li>Sleeves: remove</li>
              <li>Sleeves: shorten french cuff</li>
              <li>Sleeves: shorten from shoulder</li>
              <li>Sleeves: shorten turned hem</li>
              <li>Straps: shorten or lengthen</li>
              <li>Body & sleeve: taper</li>
              <li>Body: taper w/ darts</li>
              <li>Body: shorten w/ regular hem</li>
              <li>Body: shorten w/ original hem</li>
            </ul>
            <h3 className={classes.serviceLabel}>Custom & Reconstruction</h3>
            <ul className={classes.servicesList}>
              <li>Collar/cuff: change</li>
              <li>Personal uniform</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <GatsbyImage
              image={getImage(data.serviceOuterwear.childImageSharp)}
              className={classes.serviceImg}
            />
            <h2 className={classes.serviceTitle}>Jackets & Outerwear</h2>
            <h3 className={classes.serviceLabel}>Fix</h3>
            <ul className={classes.servicesList}>
              <li>Zipper: repair</li>
              <li>Zipper: replace</li>
              <li>Lining: repair</li>
              <li>Formal button: replace</li>
            </ul>
            <h3 className={classes.serviceLabel}>Fit</h3>
            <ul className={classes.servicesList}>
              <li>Sleeves: shorten regular</li>
              <li>Sleeves: shorten from shoulder</li>
              <li>Sleeve: lengthen</li>
              <li>Body: take in/let out (w/o lining)</li>
              <li>Body: take in/let out (w/ lining)</li>
              <li>Body: side blade</li>
              <li>Body length: shorten</li>
              <li>Lower collar & raise back</li>
              <li>Specialty/outerwear</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <GatsbyImage
              image={getImage(data.serviceVests.childImageSharp)}
              className={classes.serviceImg}
            />
            <h2 className={classes.serviceTitle}>Vests</h2>
            <h3 className={classes.serviceLabel}>Fix</h3>
            <ul className={classes.servicesList}>
              <li>Body: take in/let out</li>
              <li>Body: shorten</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
            <GatsbyImage
              image={getImage(data.serviceDresses.childImageSharp)}
              className={classes.serviceImg}
            />
            <h2 className={classes.serviceTitle}>Dresses</h2>
            <h3 className={classes.serviceLabel}>Bridal</h3>
            <ul className={classes.servicesList}>
              <li>Custom Fitting</li>
            </ul>
            <h3 className={classes.serviceLabel}>Fix</h3>
            <ul className={classes.servicesList}>
              <li>Body length: regular hem</li>
              <li>Body length: regular hem w/ lining</li>
              <li>Body length: specialty hem</li>
              <li>Body length: specialty hem w/ lining</li>
              <li>Body: Taper w/ darts</li>
              <li>Body: take in/let out</li>
              <li>Body (specialty): take in/let out</li>
            </ul>
            <h3 className={classes.serviceLabel}>Custom & Reconstruction</h3>
            <ul className={classes.servicesList}>
              <li>Personal uniform - regular</li>
              <li>Personal uniform - fancy dress</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default ServicesSection
