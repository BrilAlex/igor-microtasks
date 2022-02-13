import {ChangeEvent} from "react";

type InputPropsType = {
  value: string
  setInputValue: (value: string) => void
}

export const Input = (props: InputPropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setInputValue(event.currentTarget.value);
  };

  return (
    <input value={props.value} onChange={onChangeInputHandler}/>
  );
};