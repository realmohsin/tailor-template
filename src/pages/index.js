import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Head from '@components/Head'
import HeroSection from '@components/HeroSection'
import HeroContent from '../components/HeroContent'

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
  }
`

export default HomePage
