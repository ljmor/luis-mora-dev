import { AddIcon, CloseIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon, SmallCloseIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Button, useDisclosure, Stack, Link, Spacer, MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPhoneAlt, FaToolbox, FaUser } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa6';
import { LogoNavbar } from './LogoNavbar';


export const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg="gray.800" px='45px' position='fixed' width='100%' zIndex='banner' margin={0} top={0}>
                <Flex h={'20'} alignItems="center" >
                    <Box width={{ base: '50%', sm: '60%', md: '22%', lg:'20%', xl: '13%' }} height="100%" display="flex" alignItems="center" mr='20px'>
                        <LogoNavbar/>
                    </Box>

                    <Flex alignItems='center' justifyContent='right' width={'82%'} gap={7}>
                        <Box>
                            <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
                                <Link href="#inicio" style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.4s ease-in-out">
                                    About me
                                </Link>
                                <Link href="#acerca" style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.2s ease-in-out">
                                    Testimonials
                                </Link>
                                <Link href="#servicios" style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.2s ease-in-out">
                                    Projects
                                </Link>
                                <Link href="#contacto" style={{ textDecoration: 'none' }} color="whiteAlpha.900" fontSize="md" _hover={{ color: 'white' }} transition="font-weight 0.2s ease-in-out">
                                    Contact
                                </Link>
                            </HStack>
                        </Box>
                        <Flex alignItems="center" gap={3}>
                            <Button
                                as="a"
                                href="#cv"
                                bg="blue.600"
                                color="white"
                                _hover={{ bg: 'blue.700' }}
                                size="sm"
                                fontWeight="bold"
                                height={8}
                                borderRadius={4}
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
                                    <MenuItem icon={<FaUser />}>
                                        About Me
                                    </MenuItem>
                                    <MenuItem icon={<FaUsers />}>
                                        Testimonials
                                    </MenuItem>
                                    <MenuItem icon={<FaToolbox />}>
                                        Projects
                                    </MenuItem>
                                    <MenuItem icon={<FaPhoneAlt />}>
                                        Contact
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
