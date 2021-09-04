import React from 'react'
import { graphql, Link, useStaticQuery, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const changeFileNameToKey = fileName => {
  // changes 'featured-1-big', 'featured-2-small', etc to 'featured1Big', 'featured2Small'
  const splitInArr = fileName.split('-')
  if (splitInArr.length === 1) return splitInArr[0]
  const lastWord = splitInArr[splitInArr.length - 1]
  splitInArr[splitInArr.length - 1] =
    lastWord[0].toUpperCase() + lastWord.slice(1)
  return splitInArr.join('')
}

const projectsList = [
  {
    slug: 'projects/krispy-kreme',
    imgName: 'krispy-kreme',
    name: 'Krispy Kreme',
  },
  {
    slug: 'projects/jd-sports',
    imgName: 'jd-sports',
    name: 'JD Sports',
  },
  {
    slug: 'projects/massimo-dutti',
    imgName: 'massimo-dutti',
    name: 'Massimo Dutti',
  },
  {
    slug: 'projects/samsung',
    imgName: 'samsung',
    name: 'Samsung',
  },
  {
    slug: 'projects/nike',
    imgName: 'nike',
    name: 'Nike',
  },
  {
    slug: 'projects/hm',
    imgName: 'hm',
    name: 'H&M',
  },
  {
    slug: 'projects/lidl',
    imgName: 'lidl',
    name: 'Lidl',
  },
  {
    slug: 'projects/filson',
    imgName: 'filson',
    name: 'Filson',
  },
  {
    slug: 'projects/cmx-cinebistro',
    imgName: 'cmx-cinebistro',
    name: 'CMX CineBistro',
  },
]

const useStyles = makeStyles(theme => ({
  projectsGrid: {
    background: 'gray',
  },
  gridItem: {
    height: '40rem',
    border: `2px solid ${theme.palette.secondary.main}`,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover > div': {
      backgroundColor: 'rgba(0,0,0,0)',
    },
    '&:hover .gatsby-image-wrapper': {
      transform: 'scale(1.02)',
    },
    [theme.breakpoints.down('xs')]: {
      border: 'none',
      borderBottom: `4px solid ${theme.palette.secondary.main}`,
    },
  },
  projectImg: {
    height: '100%',
    transition: '0.4s all',
  },
  projectTitle: {
    position: 'absolute',
    bottom: '4rem',
    left: '6rem',
    width: '32rem',
    color: 'white',
    fontSize: '3.2rem',
    fontWeight: 'bold',
    zIndex: 50,
    lineHeight: '1.1',
    textShadow: 'black 0px 0px 10px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    transition: '0.4s all',
  },
}))

const ProjectsGrid = props => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      primark: file(name: { eq: "primark" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      massimoDutti: file(name: { eq: "massimo-dutti" }) {
        childImageSharp {
          gatsbyImageData(height: 397)
        }
      }
      samsung: file(name: { eq: "samsung" }) {
        childImageSharp {
          gatsbyImageData(width: 631)
        }
      }
      nike: file(name: { eq: "nike" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      hm: file(name: { eq: "hm" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      krispyKreme: file(name: { eq: "krispy-kreme" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      jdSports: file(name: { eq: "jd-sports" }) {
        childImageSharp {
          gatsbyImageData(height: 397)
        }
      }
      lidl: file(name: { eq: "lidl" }) {
        childImageSharp {
          gatsbyImageData(height: 397)
        }
      }
      filson: file(name: { eq: "filson" }) {
        childImageSharp {
          gatsbyImageData(width: 631)
        }
      }
      mcdonalds: file(name: { eq: "mcdonalds" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      cmxCinebistro: file(name: { eq: "cmx-cinebistro" }) {
        childImageSharp {
          gatsbyImageData(width: 631)
        }
      }
      schimentiHq: file(name: { eq: "schimenti-hq" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return (
    <section className={classes.projectsGrid}>
      <Grid container className={classes.gridContainer}>
        {projectsList.map(project => {
          console.log(
            project.imgName,
            'to',
            changeFileNameToKey(project.imgName)
          )
          return (
            <Grid
              item
              xs={12}
              md={4}
              className={classes.gridItem}
              // onClick={() => navigate(`/${project.slug}`)}
            >
              <GatsbyImage
                image={getImage(
                  data[changeFileNameToKey(project.imgName)].childImageSharp
                )}
                className={classes.projectImg}
              />
              <div className={classes.projectTitle}>
                <h3>{project.name}</h3>
              </div>
              <div className={classes.overlay} />
            </Grid>
          )
        })}
      </Grid>
    </section>
  )
}

export default ProjectsGrid
