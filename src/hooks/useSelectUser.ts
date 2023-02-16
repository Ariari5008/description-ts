import { useCallback } from 'react';
import { useState } from 'react';
import { User } from '../types/api/user';

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
}

export const useSelectUser = () => {
  const [selectUser, setSelectUser] = useState<User | null>(null);
  
  const onSelectUser = useCallback(({id, users, onOpen}: Props) => {
    const targetUser = users.find((user) => user.id === id)
    setSelectUser(targetUser ?? null)
    onOpen();
  },[])

  return {onSelectUser, selectUser}
}