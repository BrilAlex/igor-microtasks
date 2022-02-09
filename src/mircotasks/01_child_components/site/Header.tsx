type HeaderPropsType = {
  titleForHeader: string
};

export const Header = (props: HeaderPropsType) => {
  return (
    <div>{props.titleForHeader}</div>
  );
};