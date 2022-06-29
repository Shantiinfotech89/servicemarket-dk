import * as Colors from './Colors'
import * as FontStyles from './FontStyles'
import styled, { css, keyframes } from 'styled-components/macro'

export const ButtonWrapper = styled.div `
  position: relative;
  margin: ${props => props.margin};
  width: 100%;
`;


const fadeInKeyframe = keyframes `
  from {opacity: 0.1;}
  to {opacity: 1;}
`;

const animation = props =>
    css `
    ${fadeInKeyframe} 0.6s linear;
  `

const ButtonProvider = styled.button `
  font-weight: ${props => FontStyles.getFontWeight(FontStyles.Heading5B)};
  font-family: ${props => FontStyles.getFontFamily(FontStyles.Body)};
  font-size: ${props => props.fontSize};
  Height: ${props => props.height};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  flex-grow: ${props => props.flexGrow};
  background: ${props => props.background};
  border-radius: ${props => props.borderRadius};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor};
  color: ${props => props.color};
  text-align: ${props => props.textAlign};
  width: ${props => props.width};
  white-space: nowrap;
  text-decoration: ${props => props.textDecoration};
  cursor: pointer;
  className: ${props => props.className};
  font-size: ${props => props.fontSize}
  font-weight: ${props => props.fontWeight}
  &:focus {
    animation: ${props => props.fadeIn === true ? animation : ''};
    outline: none;
  }


`;

ButtonProvider.defaultProps = {
    theme: FontStyles.Body,
    padding: 'initial',
    mobileMargin: 'initial',
    margin: 'initial',
    flexGrow: 0,
    background: 'linear-gradient(96.22deg, #13E173 27.28%, #02CDFF 110.27%)',
    borderWidth: '0',
    borderColor: 'initial',
    borderRadius: '0',
    color: 'initial',
    textAlign: 'initial',
    width: '100%',
    height: 'initial',
    mobileWidth: 'auto',
    fadeIn: 'false',
}


/**
 * Represents a Semibold button with
 * font size: 16px
 * font name: Muli
 * font weight: Semibold
 * background color: Primary
 * padding: 16px 40px
 */
export function PrimaryLarge(props) {
    return <ButtonProvider
    fontSize = { '16px' }
    fontWeight = { props.fontWeight }
    padding = { '12px 16px' }
    margin = { props.margin }
    flexGrow = { props.flexGrow }
    background = { 'linear-gradient(96.22deg, #13E173 27.28%, #02CDFF 110.27%);' }
    color = { Colors.white }
    borderRadius = { '8px' }
    borderWidth = { '0px' }
    textAlign = { 'center' }
    width = { props.width }
    height = { '48px' }
    boxShadow = {'none'}
    fadeIn = { props.fadeIn }
    onClick = { props.onClick }
    mobileWidth = { props.mobileWidth }
    mobileMargin = { props.mobileMargin }
    className = { props.className } > { props.text } </ButtonProvider>
}

/**
 * Represents a Semibold button with
 * font size: 14px
 * font name: Muli
 * font weight: Semibold
 * background color: Primary
 * padding: 8px 16px
 */
export function PrimarySmall(props) {
    return <ButtonProvider
    fontSize = { props.fontSize }
    fontWeight = { props.fontWeight }
    padding = { '8px 16px' }
    margin = { props.margin }
    flexGrow = { props.flexGrow }
    background = { 'linear-gradient(96.22deg, #13E173 27.28%, #02CDFF 110.27%);' }
    color = { Colors.white }
    borderRadius = { '8px' }
    borderWidth = { '0px' }
    textAlign = { 'center' }
    width = { props.width }
    height = { '36px' }
    boxShadow = {'none'}
    fadeIn = { props.fadeIn }
    onClick = { props.onClick }
    mobileWidth = { props.mobileWidth }
    mobileMargin = { props.mobileMargin }
    className = { props.className } > { props.text } </ButtonProvider>
}


/**
 * Represents a Semibold button with
 * font size: 16px
 * font name: Muli
 * font weight: Semibold
 * background color: Primary
 * padding: 16px 40px
 */
export function PrimaryOutlineLarge(props) {
    return <ButtonProvider
    fontSize = { '16px' }
    fontWeight = { props.fontWeight }
    padding = { '12px 30px' }
    margin = { props.margin }
    flexGrow = { props.flexGrow }
    background = { 'transparent' }
    color = { Colors.primary }
    borderRadius = { '8px' }
    borderWidth = { '1px' }
    borderColor = { Colors.primary }
    textAlign = { 'center' }
    width = { props.width }
    height = { '48px' }
    boxShadow = {'none'}
    fadeIn = { props.fadeIn }
    onClick = { props.onClick }
    mobileWidth = { props.mobileWidth }
    mobileMargin = { props.mobileMargin }
    className = { props.className } > { props.text } </ButtonProvider>
}
/**
 * Represents a Semibold button with
 * font size: 14px
 * font name: Muli
 * font weight: Semibold
 * background color: Primary
 * padding: 16px 40px
 */
export function PrimaryOutlineSmall(props) {
    return <ButtonProvider
    fontSize = { '14px' }
    fontWeight = { props.fontWeight }
    padding = { '8px 16px' }
    margin = { props.margin }
    flexGrow = { props.flexGrow }
    background = { 'transparent' }
    color = { Colors.primary }
    borderRadius = { '8px' }
    borderWidth = { '1px' }
    borderColor = { Colors.primary }
    textAlign = { 'center' }
    width = { props.width }
    height = { '36px' }
    boxShadow = {'none'}
    fadeIn = { props.fadeIn }
    onClick = { props.onClick }
    mobileWidth = { props.mobileWidth }
    mobileMargin = { props.mobileMargin }
    className = { props.className } > { props.text } </ButtonProvider>
}


/**
 * Represents a Semibold button with
 * font size: 16px
 * font name: Muli
 * font weight: Semibold
 * background color: grayf8
 * padding: 16px 40px
 */
 export function BackLarge(props) {
  return <ButtonProvider
  fontSize = { '16px' }
  fontWeight = { props.fontWeight }
  padding = { '12px 16px' }
  margin = { props.margin }
  flexGrow = { props.flexGrow }
  background = { Colors.grayf8 }
  color = { Colors.gray61 }
  borderRadius = { '8px' }
  borderWidth = { '0px' }
  textAlign = { 'center' }
  width = { props.width }
  height = { '48px' }
  boxShadow = {'none'}
  fadeIn = { props.fadeIn }
  onClick = { props.onClick }
  mobileWidth = { props.mobileWidth }
  mobileMargin = { props.mobileMargin }
  className = { props.className } > { props.text } </ButtonProvider>
}