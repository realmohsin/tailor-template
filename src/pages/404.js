import * as React from 'react'
import Layout from '@components/Layout'
import Head from '@components/Head'

const NotFoundPage = ({ location }) => {
  return (
    <>
      <Head pathname={location.pathname} />
      <Layout>404</Layout>
    </>
  )
}

export default NotFoundPage
