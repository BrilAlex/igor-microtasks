import {ChangeEvent, useState} from "react";

type InputFullPropsType = {
  addMessage: (messageText: string) => void
};

export const InputFull = (props: InputFullPropsType) => {
  const [title, setTitle] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };

  const onClickButtonHandler = () => {
    props.addMessage(title);
    setTitle("");
  };

  return (
    <div>
      <input value={title} onChange={onChangeInputHandler}/>
      <button onClick={onClickButtonHandler}>+</button>
    </div>
  );
};