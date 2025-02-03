import { Box, Flex, Heading, Text, Image, IconButton, HStack, Spacer, Link, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaKaggle, FaLinkedin, FaStackOverflow, FaTwitter } from "react-icons/fa";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { WorkedOn } from "./WorkedOn";
import { Link as ScrollLink } from 'react-scroll';

export const Header = () => {

    return (
        <Box
            height={{ md: '1500px', lg: '830px', base: '1720px', sm: '1700px' }}
            marginTop={{ base: '10px', md: '20px', lg: '120px', xl: '90px' }}
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
                direction={{ base: 'column', lg: 'row' }} // Cambia la dirección según el tamaño de la pantalla
            >
                <Spacer />

                <Flex direction="column" gap={10} pt={50}>

                    <Box alignSelf={{ base: 'center', md: 'left' }} ml='-52px'>
                        <Heading as="h1" textAlign="left" size="4xl" color="white" mb={2}>
                            Luis Mora
                        </Heading>
                        <Heading as="h2" textAlign={{ base:"center", md:"left" }} size="2xl" fontWeight="medium" color="white">
                            Software Engineer
                        </Heading>
                    </Box>

                    <Box width={{ md: '440px', base: '350px' }} alignSelf="center" mx="2px">
                        <Text as="p" fontSize={20} textAlign={{ base:"center", md:"left" }} color="white">
                            I'm a student of software engineering with a 8 months of practice experience, my principal focus is on <b>full stack web development</b> and <b>data science</b>. I think
                            the soft skills like team work & adaptability are the fundamental base of any <i>successful project</i>.
                        </Text>
                    </Box>


                    <Box
                        cursor='pointer'
                        alignSelf={{ base: 'center', lg: 'flex-end' }}
                        _hover={{ '.arrow': { transform: 'translateY(10px)' } }} 
                    >
                        <ScrollLink
                            to='about_me'
                            smooth
                            offset={-80}
                            duration={600}
                        >
                            <Box
                                display='flex'
                                flexDirection='row'
                                alignItems='center'
                                gap={2}
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
                        </ScrollLink>
                    </Box>


                </Flex>



                <Flex direction="column" gap={10}>

                    <Box boxSize="xs" alignSelf="center" className='gradient-border-container'>
                        <Image
                            src="./assets/images/Profilephoto.jpg"
                            className="rounded-image"
                            alt="Imagen de perfil"
                        />
                    </Box>

                    <Box alignSelf="center">
                        <HStack>
                            <Tooltip label='GitHub' placement='bottom' hasArrow>
                                <Link href="https://github.com/ljmor" isExternal>
                                    <IconButton isRound icon={<FaGithub />} />
                                </Link>
                            </Tooltip>
                            <Tooltip label='LinkedIn' placement='bottom' hasArrow>
                                <Link href="https://www.linkedin.com/in/luis-javier-mora-aguilar-3391662a7/" isExternal>
                                    <IconButton isRound icon={<FaLinkedin />} />
                                </Link>
                            </Tooltip>
                            <Tooltip label='Kaggle' placement='bottom' hasArrow>
                                <Link href="https://www.kaggle.com/ljmor004" isExternal >
                                    <IconButton isRound icon={<FaKaggle />} />
                                </Link>
                            </Tooltip>
                        </HStack>
                    </Box>

                </Flex>

                <Spacer />
            </Flex>

            <WorkedOn />
        </Box>
    );
};
