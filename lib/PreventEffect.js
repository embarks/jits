import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './scss/broken.module.scss'

const PreventEffect = props => {
  const elementRef = useRef(null)
  const STARS = 3

  function _onClick (type) {
    return function (event) {
      const burst = document.createElement('P')
      burst.classList.add(styles.burst)
      for (let i = 0; i < STARS; i++) {
        let newStar = document.createElement('SPAN')
        burst.appendChild(newStar)
      }
      var rect = event.target.getBoundingClientRect()
      let x, y
      if (type === 'touch') {
        x = event.targetTouches[0].clientX - rect.left
        y = event.targetTouches[0].clientY - rect.top
      } else {
        x = event.clientX - rect.left
        y = event.clientY - rect.top
      }
      elementRef.current.appendChild(burst)
      burst.style.top = `${y - 20}px`
      burst.style.left = `${x - 10}px`
      setTimeout(() => {
        burst.remove(burst)
      }, 500)
    }
  }

  return (
    <div className={styles.container} ref={elementRef}>
      {props.render(({ onClick: _onClick('click'), onTouchStart: _onClick('touch') }))}
    </div>
  )
}

PreventEffect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  render: PropTypes.func,
  className: PropTypes.string
}

export default PreventEffect
