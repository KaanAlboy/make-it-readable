import React from 'react'
import PropTypes from 'prop-types'

const For = (props) => {
  const { arr, render: renderFunc, children, reverse } = props

  if (children) {
    if (typeof children === 'function') {
      return arr.map(children)
    }
  } else if (renderFunc && typeof renderFunc === 'function') {
    return arr.map(renderFunc)
  }
  return null
}

For.propTypes = {
  arr: PropTypes.array.isRequired,
  render: PropTypes.func,
  children: PropTypes.func,
  reverse: PropTypes.bool
}

export default For
