import React from 'react'
import Button from './Button'
import Expand from './Expand'
import Collapse from './Collapse'
import { storiesOf } from '@storybook/react'
import './scss/_storybook.scss'

const variants = [
  'primary',
  'secondary',
  'info',
  'bright',
  'success',
  'danger',
  'info2',
  'highlight',
  'bold',
  'subtle',
  'notice'
]

const stories = storiesOf('Button')

variants.forEach(function (variant) {
  stories.add(`with text [${variant}]`, () => {
    return <Button variant={variant}></Button>
  })
})

stories.add('expand', () => {
  return <Expand />
})
  .add('content', () => {
    return (
      <div style={{ 'height': '100%' }}>
        <Collapse>
          <div>
          Instant shop half and half, organic, grounds, saucer pumpkin spice whipped robust aftertaste. Breve est cup fair trade, to go flavour java caramelization barista wings. Strong robusta, single shot medium that, arabica mocha cup turkish decaffeinated. Id eu steamed con panna spoon con panna crema macchiato est whipped barista siphon. Wings single origin, java coffee crema robusta et whipped irish.
            <Collapse>
              <div>
            Carajillo mazagran, cream chicory java aftertaste roast. Half and half, siphon organic percolator cappuccino bar strong. Extra mocha, mazagran robust, aromatic cream qui eu organic cup dark half and half. Eu americano and fair trade crema mazagran aromatic caffeine. Brewed lungo americano, black, foam ut skinny barista robusta seasonal wings decaffeinated.
              </div>
            </Collapse>
          </div>
        </Collapse>
      </div>
    )
  })
