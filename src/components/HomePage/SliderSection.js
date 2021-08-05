import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Hidden } from '@material-ui/core'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderData from '@data/sliderData'
import Slide from './Slide'
import Button from '../Button'
import changeFileNameToKey from '@utils/changeFileNameToKey'
import '../../styles/slick-arrows.css'

const useStyles = makeStyles(theme => ({
  SliderSection: {
    height: '100rem',
    padding: '16.5rem 6rem',
    position: 'relative',
    '& > .gatsby-image-wrapper-constrained': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
    },
    [theme.breakpoints.down('md')]: {
      height: '125rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '14rem 0',
      height: '90rem',
    },
  },
  bgImg: {
    zIndex: -10,
  },
  slider: {
    height: '80rem',
    maxWidth: '158rem',
    margin: '0 auto',
    cursor: 'move' /* fallback if grab cursor is unsupported */,
    cursor: 'grab',
    // overflow: 'visible',
    '&:active': {
      cursor: 'grabbing',
    },
    '& > div': {
      width: '100%',
      height: '100%',
    },
  },
  button: {
    position: 'absolute',
    left: '9%',
    bottom: '15%',
    '@media (max-width: 1525px)': {
      left: '6%',
      bottom: '20%',
    },
    [theme.breakpoints.down('md')]: {
      bottom: '25%',
      left: '7%',
      transform: 'scale(0.9)',
    },
    '@media (max-width: 1245px)': {
      left: '5%',
    },
    '@media (max-width: 1125px)': {
      left: '2%',
      bottom: '35%',
      transform: 'scale(0.75)',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      transform: 'scale(1)',
      margin: '6rem auto',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1rem auto',
      right: '15%',
    },
  },
}))

const SliderSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      slider1Big: file(name: { eq: "slider-1-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider1Small: file(name: { eq: "slider-1-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider2Big: file(name: { eq: "slider-2-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider2Small: file(name: { eq: "slider-2-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider3Big: file(name: { eq: "slider-3-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider3Small: file(name: { eq: "slider-3-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider4Big: file(name: { eq: "slider-4-big" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      slider4Small: file(name: { eq: "slider-4-small" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  console.log('data: ', data)

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 'true',
    autoplaySpeed: 2800,
  }

  return (
    <section className={classes.SliderSection}>
      <StaticImage
        src="../../images/bg-1.jpg"
        alt="section background"
        className={classes.bgImg}
        objectPosition="top right"
      />
      <Slider {...settings} className={classes.slider}>
        {sliderData
          .map(slideData => {
            // adding childImageSharps to raw data first
            return {
              ...slideData,
              bigImgFluid: getImage(
                data[changeFileNameToKey(slideData.bigImgName)].childImageSharp
              ),
              smallImgFluid: getImage(
                data[changeFileNameToKey(slideData.smallImgName)]
                  .childImageSharp
              ),
            }
          })
          .map(slideData => (
            <Slide slideData={slideData} key={slideData.title} />
          ))}
      </Slider>
      <Hidden xsDown>
        <Button isLink text="Gallery" extraClass={classes.button} />
      </Hidden>
    </section>
  )
}

export default SliderSection
