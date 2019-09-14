import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './scss/mouse.module.scss'

export default function Mouse (props) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  function setMousePos (event) {
    setPos({
      x: event.pageX,
      y: event.pageY
    })
  }
  return (
    <div className={styles.container} onMouseMove={setMousePos}>
      {props.render(pos)}
    </div>
  )
}

Mouse.propTypes = {
  render: PropTypes.func
}
