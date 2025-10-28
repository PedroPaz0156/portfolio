import styled from 'styled-components'
import { Props } from '.'

export const P = styled.h3<Props>`
  color: ${(props) => (props.tipo === 'principal' ? '#282a25' : '#949494')};
  font-size: 14px;
  line-height: 22px;
`
