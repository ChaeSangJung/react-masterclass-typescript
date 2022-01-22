import React, { useState } from "react";
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value)
  }
  // MouseEvent ChangeEvent
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          value={value}
          type="text"
          placeholder="user name"
          onChange={onChange}
        />
        <button>log in</button>
      </form>
      <Circle bgColor="pink" borderColor="#a14c2a" />
      <Circle bgColor="hotpink" text="I'm here"/>
      <Circle bgColor="deeppink" />
      <Circle bgColor="magenta" />
    </div>
  );
}

export default App;
