import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Head from '@components/Head'
import HeroSection from '@components/HeroSection'
import HeroContent from '@components/HeroContent'
import SliderSection from '@components/HomePage/SliderSection'
import InfoSection from '@components/HomePage/InfoSection'
import ParallaxSection from '@components/HomePage/ParallaxSection'

const HomePage = ({ location, data }) => {
  return (
    <>
      <Head pathname={location.pathname} />
      <Layout>
        <HeroSection heroImgData={data.homeHeroBg.childImageSharp} homePage>
          <HeroContent
            subtitle="Perfect Tailoring and Garment Reconstruction"
            title="Fix your fit at Finkels Alterations"
            buttonText="Contact Us"
            url="/contact"
          />
        </HeroSection>
        <InfoSection logoFluid={data.logo} rightImgFluid={data.infoImg} />
        <ParallaxSection />
        <SliderSection />
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

export default HomePage
