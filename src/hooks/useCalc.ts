import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  a: number;
  b: number;
  result: number;
  calc: string;
};

export const useCalc = () => {
  const initialVal: Props = {
    a: 1,
    b: 1,
    result: 2,
    calc: "+",
  };

  const { isOpen, onToggle } = useDisclosure();

  const [value, setValue] = useState<Props>(initialVal);

  const onClickCalc = () => {
    if (value.calc === "+") {
      setValue({ ...value, result: value.a + value.b });
    } else if (value.calc === "-") {
      setValue({ ...value, result: value.a - value.b });
    } else if (value.calc === "×") {
      setValue({ ...value, result: value.a * value.b });
    } else if (value.calc === "÷") {
      setValue({ ...value, result: value.a / value.b });
    }
  };

  const onChangeValueA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, a: Number(e.target.value) });
  };

  const onChangeValueB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, b: Number(e.target.value) });
  };

  const onChangeCalcSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, calc: e.target.value });
  };

  return {
    value,
    isOpen,
    onToggle,
    onClickCalc,
    onChangeValueA,
    onChangeValueB,
    onChangeCalcSymbol
  };
};
