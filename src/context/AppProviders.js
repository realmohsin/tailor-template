import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '@styles/theme.js'

const AppProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppProviders
