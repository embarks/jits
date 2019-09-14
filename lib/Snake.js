import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from '../assets/head.svg'
import Neck from '../assets/neck.svg'
import BodyPart0 from '../assets/body_0.svg'
import BodyPart1 from '../assets/body_1.svg'
import BodyPart2 from '../assets/body_2.svg'
import BodyPart3 from '../assets/body_3.svg'
import BodyPart4 from '../assets/body_4.svg'
import TailEnd from '../assets/tail_end.svg'
import styles from './scss/snake.module.scss'
import cx from 'classnames'

const snake = [
  { id: 'tail-end', Piece: TailEnd, baseStyles: styles['tail-end'] },
  { id: 'body-part-4', Piece: BodyPart4, baseStyles: styles['body-part-4'] },
  { id: 'body-part-3', Piece: BodyPart3, baseStyles: styles['body-part-3'] },
  { id: 'body-part-2', Piece: BodyPart2, baseStyles: styles['body-part-2'] },
  { id: 'body-part-1', Piece: BodyPart1, baseStyles: styles['body-part-1'] },
  { id: 'body-part-0', Piece: BodyPart0, baseStyles: styles['body-part-0'] },
  { id: 'neck', Piece: Neck, baseStyles: styles['neck'] },
  { id: 'head', Piece: Head, baseStyles: styles['head'] }
]

const themes = [
  styles['fill-theme-1'],
  styles['fill-theme-2'],
  styles['fill-theme-3'],
  styles['fill-theme-4'],
  styles['fill-theme-5'],
  styles['fill-theme-6'],
  styles['fill-theme-7'],
  styles['fill-theme-8'],
  styles['fill-theme-9'],
  styles['fill-theme-10'],
  styles['fill-theme-11'],
  styles['fill-theme-12']
]

const Snake = ({ children, isMobile, scrolled }) => {
  const [themed, setThemed] = useState({})

  function _setThemed (section) {
    return () => {
      setThemed({
        ...themed,
        [section]: themes[Math.floor((Math.random() * themes.length))]
      })
    }
  }

  function onMouseEvent (id) {
    return isMobile ? undefined : _setThemed(id)
  }

  const mobileStyles = { [styles.animated]: isMobile, [styles.mobile]: isMobile }
  const _Snake = (
    <section className={cx(styles.decoration, { [styles['mobile-head']]: isMobile })}>
      {snake.map(({ Piece, baseStyles, id }) => {
        const theme = themed[id]

        return (
          <React.Fragment key={`key-${id}`}>
            <Piece
              id={id}
              key={`gadsden-${id}`}
              onMouseEnter={onMouseEvent(id)}
              onMouseLeave={onMouseEvent(id)}
              className={
                cx(baseStyles, theme, mobileStyles)
              }
            />

            <Piece key={`gadsden-shadow-${id}`} className={cx(baseStyles, styles.shadow)} />
          </React.Fragment>
        )
      }
      )}
      {children}
    </section>
  )

  if (isMobile) {
    return (
      <>
      <div className={styles['mobile-container']}>
        <div className={cx({ [styles['shown']]: !scrolled, [styles['hidden']]: scrolled })}>
          {_Snake}
        </div>
      </div>

      </>
    )
  } else return _Snake
}

Snake.propTypes = {
  isMobile: PropTypes.bool,
  scrolled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
}

export default Snake
