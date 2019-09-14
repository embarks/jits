import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Waypoint } from 'react-waypoint'
import Button from './Button'
import cx from 'classnames'
import styles from './scss/footer.module.scss'
import Fire from './Fire'

const Footer = ({ mobile, children, version, domain, email, tme }) => {
  const [showFooter, setShowFooter] = useState(false)

  function openMobileWindow () {
    const newWindow = window.open('?screen=mobile', '', 'width=411 height=731')
    newWindow.resizeTo(411, 731)
  }

  function _setShowFooter (show) { return () => setShowFooter(show) }

  const Fireplace = (
    <section className={styles.fireplace}>
      <Fire />
    </section>
  )

  return (
    <>
    {mobile ? null : Fireplace}
    <footer className={cx({ [styles.mobile]: mobile, [styles.show]: showFooter })}>
      <div className={cx(styles.bg, { [styles['show-bg']]: showFooter })} />
      <div className={cx(styles.bglt, { [styles['show-bglt']]: showFooter })} />
      <div className={cx(styles.bgltr, { [styles['show-bgltr']]: showFooter })} />
      <section className={styles['info-container']}>
        <address>
          <p>
            <label>[Author]</label><u /><span className={styles.name}>Emily Bartman</span>{', Pushing pixels around '}<em>{'since 2014. '}</em>
            {'Thank you for visiting my website. ✨'}
            <Waypoint onEnter={_setShowFooter(true)} onLeave={_setShowFooter(false)} />

            <span className={styles.url}><a href={`http://www.${domain}`}>//{' '}{domain}</a></span>
          </p>
          <label>[Feedback?]</label>
          <span className={styles.mailto}>
            <small>
              <a target="_blank" rel="noopener noreferrer" href={`mailto:${email}`}>
                {'Send mail ✉️'}
              </a>{' '}
              <a target="_blank" rel="noopener noreferrer" href={`https://t.me/${tme}`}>
                {'Telegram 💬'}
              </a>
            </small>
          </span>
        </address>
        <label>[version]</label><span className={styles.version}>{`v${version}`}</span><br />
        {mobile ? null : <>
        <Button onClick={openMobileWindow} variant="primary">
          🚧 mobile
        </Button>
        </>}
      </section>
      {children}
    </footer>
    </>
  )
}

Footer.propTypes = {
  mobile: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  version: PropTypes.string,
  domain: PropTypes.string,
  email: PropTypes.string,
  tme: PropTypes.string
}

export default Footer
