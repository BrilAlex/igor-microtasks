type ButtonPropsType = {
  title: string
  callback: () => void
};

export const Button = (props: ButtonPropsType) => {
  const onClickButtonHandler = () => {
    props.callback();
  };

  return (
    <button onClick={onClickButtonHandler}>{props.title}</button>
  );
};