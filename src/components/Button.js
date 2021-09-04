import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import { GoArrowRight } from 'react-icons/go'

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    lineHeight: '5rem',
    padding: '0 3.4rem',
    border: 'none',
    letterSpacing: '3px',
    wordSpacing: '1px',
    width: 'max-content',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '&:hover > span': {
      transform: 'translateX(-1rem)',
    },
    '&:hover > #arrow': {
      opacity: 1,
      transform: 'translateX(0.5rem)',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
      lineHeight: '5rem',
      padding: ' 0 3.5rem',
    },
  },
  arrow: {
    fontSize: '2.5rem',
    position: 'absolute',
    right: '2rem',
    top: '11px',
    // top: '27%',
    // right: '15%',
    opacity: 0,
    transition: '0.4s all',
  },
  textSpan: {
    display: 'inline-block',
    transition: '0.4s all',
  },
}))

const Button = ({ isLink, to, handleClick, text, extraClass }) => {
  const classes = useStyles()

  if (isLink) {
    return (
      <Link to={to} className={clsx(classes.button, extraClass)}>
        <span className={classes.textSpan}>{text}</span>
        <GoArrowRight className={classes.arrow} id="arrow" />
      </Link>
    )
  }

  return (
    <button onClick={handleClick} className={clsx(classes.button, extraClass)}>
      <span className={classes.textSpan}>{text}</span>
      <GoArrowRight className={classes.arrow} id="arrow" />
    </button>
  )
}

export default Button
