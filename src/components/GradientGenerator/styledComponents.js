// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.firstColor},
    ${props => props.secondColor}
  );
  height: 100vh;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: Center;
  align-items: center;
`
export const UnList = styled.ul`
  display: flex;
  justify-content: center;
`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`
export const Input = styled.input`
  outline-width: none;
  width: 100px;
  line-height: 3;
  outline: none;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: #000000;
  border-radius: 4px;
  font-weight: 600;
  outline: none;
  border: none;
  width: 120px;
  line-height: 2;
  margin: 25px;
`
export const Form = styled.form`
  text-align: center;
`
