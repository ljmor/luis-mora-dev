import { Box, Flex, Heading, Text, Image, IconButton, HStack, Spacer } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { WorkedOn } from "./WorkedOn";

export const Header = () => {
    return (
        <Box
            height={{ md: '880px', lg:'800px', base: '1720px' }}
            marginTop={{ base: '30px', md: '115px', lg: '120px', xl: '90px' }}
            width="100%"
            marginLeft="auto"
            marginRight="auto"
            alignContent="center"
            bgColor="#121212"
        >
            <Flex
                justifyContent="space-around"
                paddingTop={2}
                gap={{ base: 16, md: '60px', lg: '80px', xl: '180px' }}
                width="100%"
                direction={{ base: 'column', md: 'row' }} // Cambia la dirección según el tamaño de la pantalla
            >
                <Spacer />

                <Flex direction="column" gap={10} pt={50}>

                    <Box alignSelf={{ base: 'center', md: 'left' }} ml='-52px'>
                        <Heading as="h1" textAlign="left" size="4xl" color="white" mb={2}>
                            Luis Mora
                        </Heading>
                        <Heading as="h2" textAlign="left" size="2xl" fontWeight="medium" color="white">
                            Software Engineer
                        </Heading>
                    </Box>

                    <Box width={{ md: '440px', base: '350px' }} alignSelf="center" mx="2px">
                        <Text as="p" fontSize={20} textAlign="left" color="white">
                            I'm a software engineer with a 2 years experience, my principal focus is on <b>full stack web development</b>. I think
                            the soft skills like team work are the fundamental base of any <i>successful project</i>.
                        </Text>
                    </Box>

                    <Box
                        cursor='pointer'
                        alignSelf={{ base: 'center', md: 'flex-end' }}
                        display='flex'
                        flexDirection='row'
                        alignItems='center'
                        gap={2}
                        _hover={{ '.arrow': { transform: 'translateY(10px)' } }}  // Animación de la flecha
                    >
                        <Text color='whiteAlpha.800' _hover={{ color: 'whiteAlpha.900' }} >
                            More about me
                        </Text>
                        <MdKeyboardDoubleArrowDown
                            className='arrow' // Clases para la flecha
                            color='white'
                            fontSize={40}
                            style={{
                                transition: 'transform 0.3s ease-in-out', // Transición suave
                            }}
                        />
                    </Box>

                </Flex>

                <Flex direction="column" gap={10}>

                    <Box boxSize="xs" alignSelf="center" className='gradient-border-container'>
                        <Image
                            src="/assets/Profilephoto.JPG"
                            className="rounded-image"
                            alt="Imagen de perfil"
                        />
                    </Box>

                    <Box alignSelf="center">
                        <HStack>
                            <IconButton isRound icon={<FaGithub />} />
                            <IconButton isRound icon={<FaLinkedin />} />
                            <IconButton isRound icon={<FaStackOverflow />} />
                            <IconButton isRound icon={<FaTwitter />} />
                        </HStack>
                    </Box>

                </Flex>

                <Spacer />
            </Flex>

            <WorkedOn />
        </Box>
    );
};
