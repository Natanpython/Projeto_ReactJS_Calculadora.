import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from "./style";
import { useState } from 'react';
 
const App = () => {
  const [CurrentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setfirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = ( ) =>{
    setCurrentNumber('0')
    setfirstNumber('0')
    
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev }${number}`)
  }

  const headleSumNumbers = () => {

    if(firstNumber === '0'){
      setfirstNumber(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(CurrentNumber)
      setCurrentNumber(String(sum))
      
    }
  }
  const headleMinusNumbers = () => {

    if(firstNumber === '0'){
      setfirstNumber(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('-')
    }else {
      const sum = Number(firstNumber) - Number(CurrentNumber)
      setCurrentNumber(String(sum))
      
    }
  }
  const headleMultNumbers = () => {

    if(firstNumber === '0'){
      setfirstNumber(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('*')
    }else {
      const sum = Number(firstNumber) * Number(CurrentNumber)
      setCurrentNumber(String(sum))
      
    }
  }
  const headleDivNumbers = () => {

    if(firstNumber === '0'){
      setfirstNumber(String(CurrentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const sum = Number(firstNumber) / Number(CurrentNumber)
      setCurrentNumber(String(sum))
      
    }
  }

  const headleEquale = () => {

    if(firstNumber !== '0' && operation !== '' && CurrentNumber !== '0'){
      switch(operation){
        case '+' :
          headleSumNumbers();
          break;
        case '-' :
          headleMinusNumbers();
          break;
        case '*' :
          headleMultNumbers();
            break;
        case '/' :
          headleDivNumbers();
          break;
        default:
          break;

      }
      
    }
  }

  return (
    <>
      <Container> 
        <Content>
          <Input value={CurrentNumber}/>
          <Row>
            <Button label="x" onClick={headleMultNumbers}/>
            <Button label="/" onClick={headleDivNumbers}/>
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="DEL" onClick={handleOnClear }/>
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="+" onClick={headleSumNumbers}/>
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={headleMinusNumbers}/>
          </Row>
         
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="=" onClick={headleEquale}/>
          </Row>
          <Row>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            
          </Row>
         
        </Content>
      
      </Container>
    </>
  );
}

export default App;
