// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
`
export const Button = styled.button`
  background-color: #ffffff;
  opacity: ${props => (props.className ? 1 : 0.5)};
  color: #000000;
  border-radius: 4px;
  font-weight: ${props => (props.className ? '600' : '500')};
  outline: none;
  border: none;
  width: ${props => (props.className ? '120px' : '100px')};
  line-height: 2;
  margin: 5px;
`
