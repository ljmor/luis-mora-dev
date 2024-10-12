import React, { useState } from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    Heading,
    Icon,
    Input,
    Stack,
    Text,
    Textarea,
    useDisclosure,
    Collapse,
    Link,
    AbsoluteCenter,
} from "@chakra-ui/react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiChevronDown, FiChevronUp } from "react-icons/fi";
import emailjs from 'emailjs-com';
import Swal from "sweetalert2";
import { getEnvVariables } from "../helpers/getEnvVariables";
import { Footer } from "./Footer";

const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_ID } = getEnvVariables();

export const ContactMe = () => {
    const { isOpen, onToggle } = useDisclosure(); // Para controlar el formulario desplegable
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmiting, setIsSubmiting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmiting(true);

        emailjs.send(VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, formData, VITE_EMAILJS_PUBLIC_ID)
            .then((result) => {
                setIsSubmiting(false);
                Swal.fire('Message send successfully!', 'I recived your message 😄', 'success');
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            }, (error) => {
                console.log(error.text);
                setIsSubmiting(false);
                Swal.fire('An error has ocurred', 'Please try again or use one of others contact ways', 'error');
            });
    };

    return (
        <Box py={16} px={{ base: 6, md: 16 }} bg="#121212" color="white" display='flex' flexDirection='column'>
            <Heading as="h2" size="xl" mb={8} textAlign="center">
                Contact Me
            </Heading>
            <Text color="whiteAlpha.800" mb={16} textAlign="center" fontSize="lg">
                Interested on my services? Let's get in touch.
            </Text>

            <Flex direction={{ base: "column", md: "row" }} justify="center" align="center" width="100%" gap={10} height='30%'>

                {/* Columna izquierda: Información de contacto */}
                <Box height='220px' textAlign={{ base: "center", md: "left" }} width={{ base: "100%", md: "35%", lg: "35%", xl: "23%" }} ml='auto' mr='1'>
                    <Stack spacing={4} align={{ base: "center", md: "flex-start" }}>
                        <Heading as="h3" size="md" mb={4} color="gray.200">
                            Get in touch
                        </Heading>
                        <Flex align="center">
                            <Icon as={FiMail} w={5} h={5} mr={2} />
                            <Link href="mailto:ljmora004@outlook.com" isExternal={true} color="blue.400">
                                ljmor.dev@outlook.com
                            </Link>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FiPhone} w={5} h={5} mr={2} />
                            <Text>+593 98 766 6554</Text>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FiLinkedin} w={5} h={5} mr={2} />
                            <Link href="https://linkedin.com/in/your-profile" isExternal color="blue.400">
                                LinkedIn
                            </Link>
                        </Flex>
                        <Flex align="center">
                            <Icon as={FiGithub} w={5} h={5} mr={2} />
                            <Link href="https://github.com/ljmor" isExternal color="blue.400">
                                GitHub
                            </Link>
                        </Flex>
                    </Stack>
                </Box>

                {/* Divisor */}
                <Box position='relative' padding='10'>
                    <Divider
                        orientation="vertical"
                        height="250px"
                        mx={10}
                        display={{ base: "none", md: "block" }}
                    />

                    <Divider
                        orientation="horizontal"
                        width="450px"

                        display={{ base: "block", md: "none" }}
                    />
                    <AbsoluteCenter bg='#121212' px='4'>
                        Or
                    </AbsoluteCenter>
                </Box>

                {/* Columna derecha: Formulario de contacto */}
                <Box height='220px' textAlign={{ base: "center", md: "left" }} width={{ base: "100%", md: "35%", lg: "35%", xl: "23%" }} mr='auto' ml='1'>
                    <Heading as="h3" size="md" mb={4} color="gray.200">
                        Fill this form
                    </Heading>
                    <Button onClick={onToggle} mb={4} colorScheme="blue" rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}>
                        {isOpen ? "Hide Form" : "Contact Me"}
                    </Button>

                    <Collapse in={isOpen} animateOpacity>
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={4}>
                                <Input
                                    placeholder="Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    bg="gray.800"
                                    border="1px solid #E2E8F0"
                                    _hover={{ borderColor: "gray.600" }}
                                    color="white"
                                    required
                                />
                                <Input
                                    placeholder="Your Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    bg="gray.800"
                                    border="1px solid #E2E8F0"
                                    _hover={{ borderColor: "gray.600" }}
                                    color="white"
                                    required
                                />
                                <Input
                                    placeholder="Subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    bg="gray.800"
                                    border="1px solid #E2E8F0"
                                    _hover={{ borderColor: "gray.600" }}
                                    color="white"
                                    required
                                />
                                <Textarea
                                    placeholder="Your Message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    bg="gray.800"
                                    border="1px solid #E2E8F0"
                                    _hover={{ borderColor: "gray.600" }}
                                    color="white"
                                    required
                                />
                                <Button type="submit" colorScheme="blue" disabled={isSubmiting} >
                                    Send Message
                                </Button>
                            </Stack>
                        </form>
                    </Collapse>
                </Box>
            </Flex>

            
        </Box>
    );
};
