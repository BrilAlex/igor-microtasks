import {useState} from "react";
import {CurrencyList} from "./CurrencyList";

export type MoneyType = {
  banknote: string
  value: number
  number: string
};

export type FilterValueType = "All" | "Dollar" | "Ruble";

export const MicroTask05 = () => {
  const money: Array<MoneyType> = [
    {banknote: 'Dollar', value: 100, number: ' a1234567890'},
    {banknote: 'Dollar', value: 50, number: ' z1234567890'},
    {banknote: 'Ruble', value: 100, number: ' w1234567890'},
    {banknote: 'Dollar', value: 100, number: ' e1234567890'},
    {banknote: 'Dollar', value: 50, number: ' c1234567890'},
    {banknote: 'Ruble', value: 100, number: ' r1234567890'},
    {banknote: 'Dollar', value: 50, number: ' x1234567890'},
    {banknote: 'Ruble', value: 50, number: ' v1234567890'},
  ];
  const [filter, setFilter] = useState<FilterValueType>("All");

  const changeFilter = (filterValue: FilterValueType) => {
    setFilter(filterValue);
  };

  let currentMoney = money;

  if (filter === "Dollar") {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "Dollar");
  }

  if (filter === "Ruble") {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === "Ruble");
  }

  return (
    <CurrencyList
      money={currentMoney}
      changeFilter={changeFilter}
    />
  );
};