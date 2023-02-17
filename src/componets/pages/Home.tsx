import { FormControl, HStack, Select, VStack } from "@chakra-ui/react";
import { FC, memo } from "react";
import { CalcButton } from "../atoms/button/CalcButton";
import { CalcInput } from "../atoms/button/CalcInput";
import { CalcScaleFade } from "../molecules/CalcScaleFade";
import { useCalc } from './../../hooks/useCalc';

const CALC_OPTION: Array<string> = ["+", "-", "×", "÷"]

export const Home: FC = memo(() => {

  const {
    value,
    isOpen,
    onToggle,
    onClickCalc,
    onChangeValueA,
    onChangeValueB,
    onChangeCalcSymbol } = useCalc()

  return (
    <>
      <VStack spacing="20px">
        <HStack spacing="60px" m={6}>
          <CalcButton onToggle={onToggle} onClickCalc={onClickCalc} />
          <CalcInput
            onChange={onChangeValueA}
            value={value.a}
          />
          <FormControl onChange={onChangeCalcSymbol}>
            <Select bg="white" fontSize="24px"  >
              {CALC_OPTION.map((clac) => (<option key={clac} value={clac} >{clac}</option>))}
            </Select>
          </FormControl>
          <CalcInput
            onChange={onChangeValueB}
            value={value.b}
          />
        </HStack>
        <CalcScaleFade isOpen={isOpen} value={value.result} />
      </VStack>

    </>
  )
})