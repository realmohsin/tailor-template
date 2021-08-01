import React, { useState } from 'react'
import { Hidden } from '@material-ui/core'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import SideDrawer from './SideDrawer'

const Navigation = () => {
  const [showingSideDrawer, setShowingSideDrawer] = useState(false)

  const toggleSideDrawer = () => {
    setShowingSideDrawer(showingSideDrawer => !showingSideDrawer)
  }

  const closeSideDrawer = () => setShowingSideDrawer(false)

  return (
    <>
      <Hidden smDown>
        <Navbar />
      </Hidden>
      <Hidden mdUp>
        <MobileNavbar toggleSideDrawer={toggleSideDrawer} />
        <SideDrawer
          showing={showingSideDrawer}
          closeSideDrawer={closeSideDrawer}
        />
      </Hidden>
    </>
  )
}

export default Navigation
