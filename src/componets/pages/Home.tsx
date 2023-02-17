import { Button, FormControl, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, ScaleFade, Select, useDisclosure, VStack } from "@chakra-ui/react";
import { FC, memo, useState } from "react";

type Props = {
  a: number;
  b: number;
  result: number;
}


const CALC_OPTION: Array<string> = ["+", "-", "×", "÷"]

const initialVal: Props = {
  a: 1,
  b: 1,
  result: 2
}


export const Home: FC = memo(() => {
  const { isOpen, onToggle } = useDisclosure();

  const [caculate, setCaculate] = useState<Props>(initialVal);
  const [value, setValue] = useState<Props>(initialVal);

  const onClickCalc = () => {
    setCaculate({...value, result: value.a + value.b})
  }

  const onChangeValueA = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setValue({ ...value, a: Number(e.target.value) })
  }

  const onChangeValueB = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, b: Number(e.target.value) })
  }


  return (
    <>
      <VStack spacing="20px">
        <HStack spacing="60px" mt={6}>
          <Button
            onClick={() => {
              onToggle()
              onClickCalc()
            }}
            shadow="md" mr={5}>
            計算
          </Button>
          {/* <FormControl > */}
            <Input
              bg="white"
              defaultValue={0} width="40"
              onChange={onChangeValueA}
              value={value.a}
              type="number"
            >
              {/* <NumberInputField 
              />
              <NumberInputStepper >
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper> */}
            </Input>
          {/* </FormControl> */}

          <FormControl >
            <Select bg="white" fontSize="24"  >
              {CALC_OPTION.map((clac) => (<option key={clac}>{clac}</option>))}
            </Select>
          </FormControl>

          <FormControl>
            <NumberInput
              max={100}
              min={0}
              defaultValue={0}
              bg="white"
              width="20"
            >
              <NumberInputField onChange={onChangeValueB}
                value={value.b}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </HStack>

        <ScaleFade initialScale={0.9} in={isOpen}>
          <Input
            fontSize="24"
            w="100%"
            p='40px'
            color='white'
            mt='4'
            bgGradient='linear(to-r, green.200, pink.500)'
            rounded='md'
            shadow='md'
            textAlign="center"
            value={caculate.result}
          />
        </ScaleFade>
      </VStack>

    </>
  )
})