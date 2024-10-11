import { Box, Flex, Heading, Text, Image, Badge, Wrap, WrapItem } from "@chakra-ui/react";

const technologies = {
    frontend: [
        { name: "React", logo: "./assets/images/react-logo.png", type: "Framework", badgeCol: "blue", logoColor: "#5ed3f4" },
        { name: "JavaScript", logo: "/assets/images/JavaScript-logo.png", type: "Language", badgeCol: "yellow", logoColor: "#e8d44d", size: "40px" },
        { name: "HTML5", logo: "./assets/images/html-logo.png", type: "Language", badgeCol: "yellow", logoColor: "#dd4b24", size: "50px" },
        { name: "CSS3", logo: "./assets/images/css-logo.svg", type: "Language", badgeCol: "yellow", logoColor: "#254bdc", size: "55px" },
        { name: "Figma", logo: "./assets/images/Figma-logo.png", type: "UX/UI", badgeCol: "red", logoColor: "#ea4c1d", size: "55px" },
    ],
    backend: [
        { name: "Python", logo: "./assets/images/python-logo.svg", type: "Language", badgeCol: "yellow", logoColor: "#2f6595", size: "55px" },
        { name: "Node.js", logo: "./assets/images/nodejs-logo.png", type: "Runtime", badgeCol: "red", logoColor: "#6ea35f", size: "58px" },
        { name: "Express", logo: "./assets/images/express-logo.png", type: "Framework", badgeCol: "blue" },
        { name: "MongoDB", logo: "./assets/images/mongodb-logo.png", type: "Database", badgeCol: "green", logoColor: "#0e904b", size: "50px" },
        { name: "MySQL", logo: "./assets/images/mysql-logo.svg", type: "Database", badgeCol: "green", logoColor: "#006b8d", size: "55px" },
    ],
};


export const AboutMe = () => {

    return (
        <Box bg="gray.900" color="white" py={12} px={8} borderRadius="lg" mt={12} height={{ lg: '900px', xl: "750px" }} alignContent='center'>
            <Heading as="h2" size="xl" textAlign="center" color="white" mb={6}>
                About Me
            </Heading>

            <Flex
                direction="column"
                alignItems="center"
                textAlign="center"
                mb={12}
            >
                <Heading as="h3" size="lg" mb={4} color="blue.400">
                    My Background
                </Heading>
                <Text fontSize="lg" lineHeight="tall" color="whiteAlpha.800" maxW="800px">
                    I am a software engineer with experience in full stack web development. I have a degree on the <b>Private Technical University of Loja</b>. I have a strong foundation in
                    computer science and a passion for learning new technologies. With a background in both frontend and backend development, I love building efficient and scalable web applications.
                    Furthermore I have some certificates on <b>Udemy</b> and <b>Cisco Networking Academy</b>
                </Text>
            </Flex>

            {/* Sección de tecnologías */}
            <Box>
                <Heading as="h3" size="lg" mb={10} color="blue.400" textAlign="center">
                    Technologies I Work With
                </Heading>

                <Flex direction={{ base: "column", md: "row" }} justifyContent="space-between" alignItems="center" mb={6} gap={12}>
                    {/* Frontend Stack */}
                    <Box flex={1} textAlign="center">
                        <Heading
                            as="h4"
                            size="md"
                            mb={8}
                            color="whiteAlpha.900"
                            textShadow="0px 0px 10px rgba(0, 0, 255, 0.6)"  // Efecto de sombra azul
                            bgGradient="linear(to-l, #00c6ff, #0072ff)"  // Degradado azul a cyan
                            bgClip="text"
                        >
                            Frontend
                        </Heading>
                        <Wrap justify="center" spacing={8}>
                            {technologies.frontend.map((tech, index) => (
                                <WrapItem key={index}>
                                    <Flex direction="column" align="center">
                                        <Box
                                            alignContent='center'
                                            boxSize="80px"
                                            mb={5}
                                            bg="gray.700"
                                            borderRadius="full"
                                            p={3}
                                            boxShadow="0 0 20px rgba(0, 0, 0, 0.5)"
                                            transition="0.3s"
                                            _hover={{
                                                boxShadow: `0 0 15px ${tech.logoColor || "white"}`,
                                                transform: "scale(1.1)",
                                            }}
                                        >
                                            <Image src={tech.logo} alt={`${tech.name} logo`} boxSize={tech?.size} mx='auto' />
                                        </Box>
                                        <Text color="whiteAlpha.900" fontSize="md" fontWeight="bold">
                                            {tech.name}
                                        </Text>
                                        <Badge colorScheme={tech.badgeCol} mt={1}>
                                            {tech.type}
                                        </Badge>
                                    </Flex>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>

                    {/* Backend Stack */}
                    <Box flex={1} textAlign="center">
                        <Heading
                            as="h4"
                            size="md"
                            mb={8}
                            color="whiteAlpha.900"
                            textShadow="0px 0px 10px rgba(255, 165, 0, 0.6)"  // Efecto de sombra naranja
                            bgGradient="linear(to-l, #FF7F50, #FF4500)"  // Degradado naranja a rojo
                            bgClip="text"
                        >
                            Backend
                        </Heading>
                        <Wrap justify="center" spacing={8}>
                            {technologies.backend.map((tech, index) => (
                                <WrapItem key={index}>
                                    <Flex direction="column" align="center">
                                        <Box
                                            alignContent='center'
                                            boxSize="80px"
                                            mb={5}
                                            bg="gray.700"
                                            borderRadius="full"
                                            p={3}
                                            boxShadow="0 0 20px rgba(0, 0, 0, 0.5)"
                                            transition="0.3s"
                                            _hover={{
                                                boxShadow: `0 0 15px ${tech.logoColor || "white"}`,
                                                transform: "scale(1.1)",
                                            }}
                                        >
                                            <Image src={tech.logo} alt={`${tech.name} logo`} boxSize={tech?.size} mx='auto' />
                                        </Box>
                                        <Text color="whiteAlpha.900" fontSize="md" fontWeight="bold">
                                            {tech.name}
                                        </Text>
                                        <Badge colorScheme={tech.badgeCol} mt={1}>
                                            {tech.type}
                                        </Badge>
                                    </Flex>
                                </WrapItem>
                            ))}
                        </Wrap>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};
