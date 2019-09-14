import React from 'react'
import PropTypes from 'prop-types'
import styles from './scss/fire.module.scss'

const Fire = props => {
  return (
    <div className={styles.light} >
      <ul>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
        <li/>
      </ul>
    </div>
  )
}

Fire.propTypes = {
  isMobile: PropTypes.bool
}

export default Fire
