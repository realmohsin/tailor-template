import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Head from '@components/Head'
import HeroBanner from '@components/HeroBanner'
import ServicesSection from '@components/ServicesPage/ServicesSection'
import Gallery from '@components/GalleryPage/Gallery'

const GalleryPage = ({ location, data }) => {
  return (
    <>
      <Head pathname={location.pathname} />
      <Layout>
        <HeroBanner
          // heroImgData={data.homeHeroBg.childImageSharp}
          title="Gallery"
        />
        <Gallery />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    homeHeroBg: file(name: { eq: "hero-img-1" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    logo: file(name: { eq: "logo" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    infoImg: file(name: { eq: "hero-img-1" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default GalleryPage
