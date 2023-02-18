import { Box, Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useRef, useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo(({ user, isOpen, isAdmin, onClose }) => {

  const [usename, setUsername] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setUsername(user?.username ?? '')
    setName(user?.name ?? '')
    setEmail(user?.email ?? '')
    setPhone(user?.phone ?? '')
  }, [user])

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)

  const onClickUpdate = () => alert()

  const isLoadedFn = () => {
    setIsLoaded(prev => (
      prev === true ? !prev : false
    ))
  }

  const insideRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(isLoaded)
    //対象の要素を取得
    const el = insideRef.current;

    //対象の要素がなければ何もしない
    if (!el) return;

    //クリックした時に実行する関数
    const hundleClickOutside = (e: MouseEvent) => {
      if (!el?.contains(e.target as Node)) {
        //ここに外側をクリックしたときの処理
        isLoadedFn()
        console.log("a")
      } else {
        console.log("b")
        return
      }
    };
    document.addEventListener("click", hundleClickOutside);

    return () => {
      document.removeEventListener("click", hundleClickOutside);
    };
  }, [isLoaded]);
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom" >
      <ModalOverlay >
        <ModalContent pb={2} ref={insideRef}>
          <ModalHeader>ユーザー詳細</ModalHeader>
          <ModalCloseButton onClick={isLoadedFn}></ModalCloseButton>
          <ModalBody mx={4} >
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>
                  <FormLabel>名前</FormLabel>
                  <Skeleton
                    height='40px'
                    isLoaded={isLoaded}
                    bg='pink.100'
                    color='white'
                    fadeDuration={1}
                  >
                    <Input value={usename} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                  </Skeleton>
                  <FormLabel>成果</FormLabel>
                  <Skeleton
                    height='40px'
                    isLoaded={isLoaded}
                    bg='pink.100'
                    color='white'
                    fadeDuration={1}
                  >
                    <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                  </Skeleton>
                  <FormLabel>Mail</FormLabel>
                  <Skeleton
                    height='40px'
                    isLoaded={isLoaded}
                    bg='pink.100'
                    color='white'
                    fadeDuration={1}
                  >
                    <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                  </Skeleton>
                  <FormLabel>TEL</FormLabel>
                  <Skeleton
                    height='40px'
                    isLoaded={isLoaded}
                    bg='pink.100'
                    color='white'
                    fadeDuration={1}
                  >
                    <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                  </Skeleton>
                </FormLabel>

              </FormControl>
              <Box textAlign='center'>
                <Button onClick={() => setIsLoaded((v) => !v)}>閲覧</Button>
              </Box>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>更新</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
})