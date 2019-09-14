import React from 'react'
import PropTypes from 'prop-types'
import Collapse from 'react-bootstrap/Collapse'
import Expand from './Expand'

export function CuteCollapse (props) {
  return (
    <Expand className="cute-collapse" Content={(innerProps) => (
      <Collapse {...props} in={innerProps.expanded}>
        <section className="content">
          {props.children}
        </section>
      </Collapse>
    )}>
    </Expand>
  )
}

CuteCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
export default CuteCollapse
