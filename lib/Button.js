import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

export function CuteButton ({ children, ...props }) {
  const defaultText = props.variant === 'enc' ? null : 'Make it so'
  const myChildren = !children ? defaultText : children
  return (
    <Button className="cute-button" {...props}>
      <span>
        {myChildren}
      </span>
    </Button>
  )
}

CuteButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.string
}
export default CuteButton
