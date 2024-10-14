import { Box, Text, Stack, Link, Icon, Divider } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => {
    return (
        <Box as="footer" bg="#121212" color="white" py={10} px={5} bottom='0' alignContent='end' mx='auto' mb='-90px' mt='20px' width='90%' height='300px' >

            {/* Divisor */}
            <Divider my={8} borderColor="gray.700" />

            {/* Sección de redes sociales */}
            <Stack direction="row" spacing={6} justifyContent='flex-end'>
                    <Link href="https://github.com/ljmor" isExternal>
                        <Icon as={FaGithub} w={6} h={6} _hover={{ color: "blue.400" }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/luis-javier-mora-aguilar-3391662a7/" isExternal>
                        <Icon as={FaLinkedin} w={6} h={6} _hover={{ color: "blue.400" }} />
                    </Link>
                    {/* <Link href="https://twitter.com" isExternal>
                        <Icon as={FaTwitter} w={6} h={6} _hover={{ color: "blue.400" }} />
                    </Link> */}
                </Stack>

            {/* Texto centrado */}
            <Text textAlign="center" fontSize="sm" mt='10px'>
                Made with ❤️ by ljmor
            </Text>
        </Box>
    );
};
