import { FC, memo, ReactNode } from "react";
import { Button } from '@chakra-ui/button';

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, isDisabled = false, loading = false, onClick } = props
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={isDisabled}
      isLoading={loading}
      onClick={onClick}
    >
      {children}
    </Button>
  )
})
