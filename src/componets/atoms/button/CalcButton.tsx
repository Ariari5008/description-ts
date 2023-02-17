import { Button } from "@chakra-ui/react"
import { FC, memo } from 'react';

type Props = {
  onToggle: () => void;
  onClickCalc: () => void;
}

export const CalcButton:FC<Props> = memo(({onToggle, onClickCalc}) => {
  return (
    <>
      <Button
        onClick={() => {
          onToggle()
          onClickCalc()
        }}
        shadow="md" mr={5}>
        計算
      </Button>
    </>
  )
})