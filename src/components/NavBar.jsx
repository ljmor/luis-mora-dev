import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Link, MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react';
import { FaPhoneAlt, FaToolbox, FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { LogoNavbar } from './LogoNavbar';
import { useEffect } from 'react';
import { Events, scrollSpy, Link as ScrollLink, animateScroll } from 'react-scroll';


export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    // Scroll managment
    useEffect(() => {
        // Updating scrollSpy when the component mounts.
        scrollSpy.update();

        // Returning a cleanup function to remove the registered events when the component unmounts.
        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);

    return (
        <>
            <Box bg="gray.800" px={{ base: '12px', md: '45px' }} position='fixed' width='100%' zIndex='banner' margin={0} top={0}>
                <Flex h={'20'} alignItems="center" >

                    <Box
                        width={{ base: '55%', sm: '60%', md: '22%', lg: '20%', xl: '13%' }}
                        height="100%"
                        display="flex"
                        alignItems="center"
                        mr='20px'
                        cursor='pointer'
                        onClick={() => animateScroll.scrollToTop()}
                    >
                        <LogoNavbar />
                    </Box>

                    <Flex alignItems='center' justifyContent='right' width={'82%'} gap={7}>
                        <Box>
                            <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
                                <ScrollLink
                                    to='about_me'
                                    smooth
                                    offset={-80}
                                    duration={1000}
                                >
                                    <Link style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.4s ease-in-out">
                                        About me
                                    </Link>
                                </ScrollLink>

                                <ScrollLink
                                    to='articles'
                                    smooth
                                    offset={-110}
                                    duration={1000}
                                >
                                    <Link style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.2s ease-in-out">
                                        Articles
                                    </Link>
                                </ScrollLink>

                                <ScrollLink
                                    to='projects'
                                    smooth
                                    offset={-120}
                                    duration={1000}
                                >
                                    <Link style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.2s ease-in-out">
                                        Projects
                                    </Link>
                                </ScrollLink>

                                <ScrollLink
                                    to='contact'
                                    smooth
                                    offset={-80}
                                    duration={1000}
                                >
                                    <Link style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.2s ease-in-out">
                                        Contact
                                    </Link>
                                </ScrollLink>
                            </HStack>
                        </Box>
                        <Flex alignItems="center" gap={3}>
                            <Button
                                as="a"
                                href="./CV.pdf"  // Ruta del archivo en la carpeta public
                                download
                                bg="blue.600"
                                color="white"
                                _hover={{ bg: 'blue.700' }}
                                size="sm"
                                fontWeight="bold"
                                height={8}
                                borderRadius={4}
                                cursor='pointer'
                            >
                                Download CV
                            </Button>

                            <Menu>
                                <MenuButton
                                    size="md"
                                    bgColor={'whiteAlpha.700'}
                                    borderColor='gray.3¿800'
                                    icon={<HamburgerIcon />}
                                    aria-label="Open Menu"
                                    display={{ md: 'none' }}
                                    onClick={isOpen ? onClose : onOpen}
                                    height={9}
                                    borderRadius={4}
                                    as={IconButton}
                                    variant='solid'

                                />
                                <MenuList>
                                    <ScrollLink
                                        to='about_me'
                                        smooth
                                        offset={-80}
                                        duration={1000}
                                    >
                                        <MenuItem icon={<FaUser />}>
                                            About Me
                                        </MenuItem>
                                    </ScrollLink>

                                    <ScrollLink
                                        to='articles'
                                        smooth
                                        offset={-110}
                                        duration={1000}
                                    >
                                        <MenuItem icon={<FaUsers />}>
                                            Articles
                                        </MenuItem>
                                    </ScrollLink>

                                    <ScrollLink
                                        to='projects'
                                        smooth
                                        offset={-120}
                                        duration={1000}
                                    >
                                        <MenuItem icon={<FaToolbox />}>
                                            Projects
                                        </MenuItem>
                                    </ScrollLink>

                                    <ScrollLink
                                        to='contact'
                                        smooth
                                        offset={-80}
                                        duration={1000}
                                    >
                                        <MenuItem icon={<FaPhoneAlt />}>
                                            Contact
                                        </MenuItem>
                                    </ScrollLink>

                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
