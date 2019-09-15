import React from 'react'
import Button from './Button'
import Expand from './Expand'
import Collapse from './Collapse'
import { storiesOf } from '@storybook/react'
import './scss/_storybook.scss'
import BootstrapButton from 'react-bootstrap/Button'

const bootstrapStory = storiesOf('Button', module)

const variants = [
  'primary',
  'secondary',
  'info',
  'success',
  'green',
  'error',
  'danger',
  'warn',
  'highlight',
  'link',
  'dark',
  'light',
  'bright',
  'bold',
  'black',
  'subtle',
  'notice',
  'orange'
]

bootstrapStory.add('bootstrap buttons', () => {
  return variants.map(function (variant) {
    return (<BootstrapButton key={variant} variant={variant}>{`bootstrap [${variant}]`}</BootstrapButton>)
  })
})

const emojis = [
  '💀',
  '🎃',
  '😍😍😍'
]

const CenterDecorator = story => <>
  <div className={`
    h-100 
    d-flex 
    align-items-center
    flex-col
    `}>
    {story()}
  </div>
</>

const defaultStory = storiesOf('Button', module)

defaultStory.add('with text [default]', () => <Button />)

defaultStory.add('inline [default]', () => (
  <div style={{ color: 'white' }}>
    {`Instant shop half and half, organic, grounds, saucer
     pumpkin spice whipped robust aftertaste. Breve est 
     cup fair trade, to go flavour java caramelization 
     barista wings. Strong robusta, single shot medium 
     that, arabica mocha cup turkish decaffeinated. Id eu 
     steamed con panna spoon con panna crema macchiato est 
     whipped barista siphon. Wings single origin, java 
     offee crema robusta et whipped irish.  `}
    <Button />
    {`  Carajillo mazagran, cream chicory java 
      aftertaste roast. Half and half, siphon organic 
      percolator cappuccino bar strong. Extra mocha, 
      mazagran robust, aromatic cream qui eu organic cup 
      dark half and half. Eu americano and fair trade crema
      mazagran aromatic caffeine. Brewed lungo americano, 
      black, foam ut skinny barista robusta seasonal wings 
      decaffeinated.
   `}
  </div>
))

const stories = storiesOf('Button', module)
stories.addDecorator(CenterDecorator)

stories.add('with text [cute]', () => {
  return <>
  <div><p><Button disabled>disabled</Button></p></div>
  {variants.map(function (variant) {
    return (<div key={variant}>
      <p>
        <Button variant={variant}>{variant}</Button>
      </p>
      <div></div>
      {emojis.map((emoji, index) => {
        return (
          <p key={index}>
            <Button variant={variant}>
              {emoji}
            </Button>
          </p>
        )
      })}
    </div>)
  })}
    </>
})

const expandStories = storiesOf('Button', module)

expandStories.add('expand', () => {
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
