import React from 'react'
import { makeStyles } from '@material-ui/core'

// dont need the hover effect since it wont be visible on desktop

const useStyles = makeStyles(theme => ({
  toggle: {
    width: '40px',
    height: '46px',
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px 0',
    cursor: 'pointer',
    '& > div': {
      width: '95%',
      height: '2px',
      backgroundColor: theme.palette.primary.main,
      transition: 'transform 0.2s',
    },
    '&:hover > div:first-of-type': {
      transform: 'translateY(-2px)',
    },
    '&:hover > div:last-of-type': {
      transform: 'translateY(2px)',
    },
  },
}))

const Toggle = ({ onToggle }) => {
  const classes = useStyles()
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
      <div className={classes.toggle} onClick={onToggle}>
        <div />
        <div />
        <div />
      </div>
    </>
  )
}

export default Toggle
