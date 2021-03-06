import React from 'react'
import styled, { css } from 'styled-components'
import Hamburger from 'svg/Hamburger'

const Wrapper = styled.div`
  height: 35px;
  width: 35px;
  border: 1px solid #ddd;
  position: relative;
  top: 15px;
  ${props => (props.position === 'right' ? css`right: 15px;` : css`left: 15px;`)}
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  &:hover svg g {
    stroke: #4688F1;
  }

  @media (min-width: 1500px) {
    display: none;
  }

  @media (max-width: 720px) {
    ${props => (props.position === 'left' ? css`float: left;` : css`float: right;`)}
  }

  ${props => props.sidebarIsOpen && css`
    @media (max-width: 720px) {
      ${props => (props.position === 'left' ? css`left: 245px;` : css`right: 245px;`)}
      top: 6px;
    }
  `}
`

export default props => (
  <Wrapper {...props}>
    <Hamburger />
  </Wrapper>
)
