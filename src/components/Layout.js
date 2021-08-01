import React from 'react'
import AppProviders from '@context/AppProviders'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navigation from '@components/Navigation'
import Footer from '@components/Footer.js'

const Layout = ({ children }) => {
  return (
    <AppProviders>
      <CssBaseline />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </AppProviders>
  )
}

export default Layout
