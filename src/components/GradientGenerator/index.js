import {Component} from 'react'
import {
  MainContainer,
  UnList,
  InputContainer,
  FormContainer,
  Input,
  Button,
  Form,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
class GradientGenerator extends Component {
  state = {
    selectedBtn: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    color1: '#8ae323',
    color2: '#014f7b',
  }

  changeSelectedBtn = value => {
    this.setState({selectedBtn: value})
  }

  firstColorUpdate = e => {
    this.setState({color1: e.target.value})
  }

  secondColorUpdate = e => {
    this.setState({color2: e.target.value})
  }

  updateAllInput = e => {
    e.preventDefault()
    const {color1, color2} = this.state
    this.setState({firstColor: color1, secondColor: color2})
  }

  render() {
    const {selectedBtn, color1, color2, firstColor, secondColor} = this.state
    console.log(selectedBtn)

    return (
      <MainContainer
        data-testid="gradientGenerator"
        firstColor={firstColor}
        secondColor={secondColor}
        direction={selectedBtn}
      >
        <h1>Generate a CSS Color Gradient</h1>
        <p>Choose Direction</p>
        <UnList>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              btnDetails={each}
              selectedBtn={selectedBtn}
              key={each.directionId}
              changeSelectedBtn={this.changeSelectedBtn}
            />
          ))}
        </UnList>
        <p>Pick the Colors</p>
        <InputContainer>
          <Form onSubmit={this.updateAllInput}>
            <FormContainer>
              <div>
                <p>{firstColor}</p>
                <Input
                  value={color1}
                  type="color"
                  onChange={this.firstColorUpdate}
                />
              </div>
              <div>
                <p>{secondColor}</p>
                <Input
                  value={color2}
                  type="color"
                  onChange={this.secondColorUpdate}
                />
              </div>
            </FormContainer>
            <Button type="submit">Generate</Button>
          </Form>
        </InputContainer>
      </MainContainer>
    )
  }
}
export default GradientGenerator
