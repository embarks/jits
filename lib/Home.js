import React from 'react'
import PropTypes from 'prop-types'
import Input from './Input'

function Home (props) {
  return (
    <div className={'home'}>
      <p>Hello, <Input onChange={props.changeName} subtle as='input' type='text' value={props.name} /></p>
      {props.children ? props.children : null}
    </div>
  )
}

Home.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  changeName: PropTypes.func
}

export default Home
