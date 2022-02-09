import {Button} from "./components/Button";

export const MicroTask03 = () => {
  const onClickHandler = (name: string, age: number, address: string) => {
    console.log(name, age, address);
  };

  const onClickHandler2 = (name: string) => {
    console.log(name);
  };

  const onClickHandler3 = () => {
    console.log("I am simple button");
  };

  return (
    <>
      <button onClick={(event) => {console.log("Hello!")}}>
        myYouTubeChannel
      </button>
      <Button
        title={"myYouTubeChannel - 1"}
        callBack={() => onClickHandler("Alex", 34, "Minsk")}
      />
      <Button
        title={"myYouTubeChannel - 2"}
        callBack={() => onClickHandler2("Ivan")}
      />
      <Button
        title={"Simple button"} callBack={onClickHandler3}
      />
    </>
  );
};