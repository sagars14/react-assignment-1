import React, { useState } from "react";
// import "./App.css";
import ButtonComponent from "./Components/Button";
import InputText from "./Components/InputText";
import Text from "./Components/Text";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [textVal, setTextVal] = useState<string>("Hello World!");

  const onClick = () => {
    setTextVal(inputValue);
    setInputValue("");
    console.log("222---inputValue", inputValue);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <Text message={textVal}></Text>
        <InputText
          placeholder='Enter Password'
          value={inputValue}
          handleChange={setInputValue}
        ></InputText>
        <ButtonComponent
          label='Click Me'
          handleClick={onClick}
        ></ButtonComponent>
      </header>
    </div>
  );
}

export default App;
