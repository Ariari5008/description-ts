import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickUserManagement: () => void;
    onClickSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo(({onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting}) => {
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay>
                    <DrawerBody p={0} bg="gray.100">
                        <DrawerContent>
                            <Button w="100%" onClick={onClickHome}>Top</Button>
                            <Button w="100%" onClick={onClickUserManagement}>ユーザー一覧</Button> 
                            <Button w="100%" onClick={onClickSetting}>設定</Button>
                        </DrawerContent>
                    </DrawerBody>
                </DrawerOverlay>
            </Drawer>
    )
})