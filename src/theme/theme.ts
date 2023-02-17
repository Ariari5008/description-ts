import { extendTheme } from "@chakra-ui/react"

const useBreakpoint = {
    styles: {
        global: {
            body: {
                backgroundColor: "red.100",
                color: "purple.800"
            },
        }

    }
};

const theme = extendTheme({...useBreakpoint})



export default theme;