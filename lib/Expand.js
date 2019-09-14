import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import cx from 'classnames'

export function Expand ({ children, Content: ExpandedContent, className, ...props }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={cx({ expanded, [className]: typeof className !== 'undefined' })}>
      <Button
        {...props}
        onClick={() => setExpanded(!expanded)}
        variant="enc"
      >
      </Button>
      {
        ExpandedContent
          ? <ExpandedContent expanded={expanded} />
          : null
      }
      {children}
    </div>
  )
}

Expand.propTypes = {
  children: PropTypes.node,
  Content: PropTypes.func,
  className: PropTypes.string
}

export default Expand
