import { InputContainer } from "./style";

const input = ({value}) => {
    return (
      
        <InputContainer>
          <input disabled value={value} />
        </InputContainer>
   
    );
  }
  
  export default input;
  