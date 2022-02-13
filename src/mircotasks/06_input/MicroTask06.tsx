import {useState} from "react";
import {InputFull} from "./components/InputFull";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export const MicroTask06 = () => {
  const [messages, setMessages] = useState([
    {message: "message1"},
    {message: "message2"},
    {message: "message3"},
  ]);

  const [inputValue, setInputValue] = useState("");

  const addMessage = (messageText: string) => {
    let newMessage = {message: messageText};
    setMessages([newMessage, ...messages]);
  };

  const onClickButtonHandler = () => {
    addMessage(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <Input value={inputValue} setInputValue={setInputValue}/>
      <Button title={"+"} callback={onClickButtonHandler}/>
      <InputFull addMessage={addMessage}/>
      {messages.map((m, i) => {
        return (
          <div key={i}>{m.message}</div>
        );
      })}
    </div>
  );
};