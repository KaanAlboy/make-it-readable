import PropTypes from 'prop-types'

const If = (props) => {
  const { condition, then: thenFunc, else: elseFunc, children } = props

  if (children) {
    if (typeof children === 'function' && condition) {
      return children()
    } else if (typeof children === 'object') {
      if (condition) {
        return children.then ? children.then() : null
      } else {
        return children.else ? children.else() : null
      }
    }
    return null
  } else if (condition) {
    return thenFunc ? thenFunc() : null
  } else {
    return elseFunc ? elseFunc() : null
  }
}

If.propTypes = {
  condition: PropTypes.bool.isRequired,
  then: PropTypes.func,
  else: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
}

export default If
