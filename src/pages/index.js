import * as React from 'react'
import Layout from '@components/Layout'
import Head from '@components/Head'

const HomePage = ({ location }) => {
  return (
    <>
      <Head pathname={location.pathname} />
      <Layout>Finkels Alterations</Layout>
    </>
  )
}

export default HomePage
