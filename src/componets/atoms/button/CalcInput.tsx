import { Input } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
}

export const CalcInput:FC<Props> = memo(({onChange, value}) => {
  return (
    <>
      <Input
        type="number"
        bg="white"
        onChange={onChange}
        value={value}
      />
    </>
  )
})