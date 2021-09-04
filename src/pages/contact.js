import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/Layout'
import Head from '@components/Head'
import ContactSection from '@components/ContactPage/ContactSection'
import HeroBanner from '@components/HeroBanner'
import ContactForm from '@components/ContactPage/ContactForm'

const ContactPage = ({ location, data }) => {
  return (
    <>
      <Head pathname={location.pathname} />
      <Layout>
        <HeroBanner
          heroImgData={data.homeHeroBg.childImageSharp}
          title="Contact"
        />
        <ContactSection />
        <ContactForm />
        {/* <ContentSection /> */}
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

export default ContactPage
