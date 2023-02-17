import { Input, ScaleFade } from "@chakra-ui/react"
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  value: number;
}

export const CalcScaleFade:FC<Props> = memo(({isOpen, value}) => {
  return (
    <>
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
          readOnly
          value={value}
        />
      </ScaleFade>
    </>
  )
})