import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './scss/mobile-links.module.scss'
import { Waypoint } from 'react-waypoint'
import cx from 'classnames'
import PreventEffect from './PreventEffect'

const RevealLinks = ({ Link, links, ...props }) => {
  const [highlighted, setHighlighted] = useState([links[0]['id']])

  function _handleWaypoint (link) {
    return (waypoint) => {
      if (waypoint.currentPosition === 'inside') {
        setHighlighted(highlighted.filter(id => id !== link.id).concat(link.id))
      } else if (props.scrolled) {
        setHighlighted(highlighted.filter(id => id !== link.id))
      }
    }
  }

  return (
    links.map((link, index) => (
      <React.Fragment key={`link-${index}`}>
        <Waypoint bottomOffset="35%" topOffset="55%" onPositionChange={_handleWaypoint({ id: link.id, index })}>
          {
            link.hasOwnProperty('href')
              ? <a target="_blank" href={link.href}
                rel="noopener noreferrer"
                className={cx(styles.link, { [styles.highlighted]: highlighted.includes(link.id) })}
              >
                {link.title}
              </a>
              : !link.complete
                ? <div className={cx(styles.link, { [styles.highlighted]: highlighted.includes(link.id) })}
                ><PreventEffect render={({ onTouch, onClick }) => {
                    return (
                      <button className={styles['temporary-link']}
                        onTouchEnd={onTouch}
                        onClick={onClick}
                      >
                        {link.title}
                      </button>
                    )
                  }} />
                </div>
                : <Link to={link.link} className={cx(styles.link, { [styles.highlighted]: highlighted.includes(link.id) })}>
                  {link.title}
                </Link>
          }
        </Waypoint>
      </React.Fragment>
    ))
  )
}

RevealLinks.propTypes = {
  scrolled: PropTypes.bool,
  Link: PropTypes.any,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    href: PropTypes.string,
    complete: PropTypes.bool
  }))
}

export default RevealLinks
