import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Head from '@components/Head'
import HeroSection2 from '@components/HeroSection2'
import HeroContent from '@components/HeroContent'
import SliderSection from '@components/HomePage/SliderSection'
import InfoSection from '@components/HomePage/InfoSection'
import ParallaxSection from '@components/HomePage/ParallaxSection'

const HomePage = ({ location, data }) => {
  return (
    <>
      <Head pathname={location.pathname} />
      <Layout>
        <HeroSection2
          heroImgData={data.homeHeroBg.childImageSharp}
          homePage
        ></HeroSection2>
        {/* <InfoSection logoFluid={data.logo} rightImgFluid={data.infoImg} />
        <ParallaxSection />
        <SliderSection /> */}
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    homeHeroBg: file(name: { eq: "hero-img-2" }) {
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

export default HomePage
