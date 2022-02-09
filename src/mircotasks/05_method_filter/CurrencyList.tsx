import {FilterValueType, MoneyType} from "./MicroTask05";

type CurrencyListPropsType = {
  money: Array<MoneyType>
  changeFilter: (filterValue: FilterValueType) => void
};

export const CurrencyList = (props: CurrencyListPropsType) => {
  return (
    <>
      <ul>
        {props.money.map((banknote, i) => {
          return (
            <li key={i}>
              <span>{banknote.banknote} </span>
              <span>{banknote.value} </span>
              <span>{banknote.number}</span>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => {props.changeFilter("All")}}>All</button>
        <button onClick={() => {props.changeFilter("Dollar")}}>Dollars</button>
        <button onClick={() => {props.changeFilter("Ruble")}}>Rubles</button>
      </div>
    </>
  );
};