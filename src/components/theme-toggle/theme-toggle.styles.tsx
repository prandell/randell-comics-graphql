import styled from 'styled-components'
import { ReactComponent as ThemeIconSvg } from '../../assets/theme-toggle.svg'

export const ThemeToggle = styled.div`
  padding: 5px 7px 0px 5px;
  cursor: pointer;
`

export const ThemeIcon = styled(ThemeIconSvg)`
  width: 20px;
  height: 20px;
`
