import React from 'react'
import Footer from './Footer'
import { storiesOf } from '@storybook/react'

const story = storiesOf('Footer', module)
story.add('Footer', () => {
  return (
    <Footer />
  )
})
