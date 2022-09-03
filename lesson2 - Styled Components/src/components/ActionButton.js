import React from 'react'
import styled from 'styled-components'

const ClickButton = styled.button`
background-color: purple;
color: #fff;
padding: 0.5em;
font-size: 1em;
`

const ActionButton = ({text}) => {
  return (
    <ClickButton>{text}</ClickButton>
  )
}

export default ActionButton