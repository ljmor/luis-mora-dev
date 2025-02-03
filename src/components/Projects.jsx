import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Heading, Text, Stack, Icon, Link, Spacer, useDisclosure, useMediaQuery, HStack, Badge } from "@chakra-ui/react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { ModalProject } from "./ModalProject";

export const Projects = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedProject, setSelectedProject] = useState({ title: '', body: '', to: '' });
    const modalFocusRef = useRef();

    const projects = [
        {
            name: "Digital Documental Managment System",
            description: "A functional prototype developed on Figma following the best flow of work inside of the UX/UI design. The prototype allows: Documental managment, Database search and an generative AI module",
            body: "A group of two people we developed a functional prototype for the Loja, Ecuador Chamber of Commerce. The protoype includes 3 principal modules (Documental managment, Database search and an generative AI module) a strong relational database system and a simply and minimalist user interface to improve the fast learning of the plataform to new users. Also the prototype prorpose a user-role system giving to the administration department more control on the managment of the DB files over the organization secretary department",
            company: "Loja Chamber of Commerce",
            link: "https://www.figma.com/proto/pQGasygHI0C3iLBnIFHVd7/Sistema-de-gesti%C3%B3n-documental-digital---CC-Loja?node-id=0-1&t=ro7xXoGWlRVmir4g-1",
            projectsBadges: [
                <Badge colorScheme='red'>Figma</Badge>,
                <Badge colorScheme='purple'>Design Thinking</Badge>,
            ]
        },
        {
            name: "Users Segmentation for study and market analysis in Clipp Events App",
            description: "Process of EDA, models selection (Clustering for users segmentation and Linear regression for app demand prediction) and strategies to take about the results obtained from our entire analysis",
            body: "Develop of machine learning algorithms to target the best strategies for increment users in Clipp Events App, Kmeans clustering model to segmentate users, we grouped them by fidelity over time and the preferent type of shows consumed. Futhermore we develop a linear regression model with the capability to predict the number of shows a user could acquire, with this info we show the company the best  potentialmarketing strategies for increment users demand on Clipp Events App",
            company: "Clipp SAS",
            link: "https://github.com/ljmor/marketseg-clustering-clipp",
            projectsBadges: [
                <Badge colorScheme="teal" >Machine Learning</Badge>,
                <Badge colorScheme="cyan" >Sklearn</Badge>,
                <Badge colorScheme="cyan" >Pandas</Badge>
            ]
        },
        {
            name: "Clinic Managment System",
            description: "Building of a hospitalary managment system with the capability to administrate the patients clinic histories and all processes that envolve doctors, nurses, hospital recepcionists and patients",
            body: "Develop of a web app with React framework to make a clinic managment system that allow doctors, nurses and patients administrate clinic histories, every patient has a N number of clinic histories and each one has a N number of clinic formularies created by doctors in a xlsx format rendered in real time on the web app. Nurses has only read access to all hospital patients clinic histories. A recepcionist user make the access of a new or old patient to the clinic (each new access create a new user clinic history in the system). Finally there is an admin user that manage all users system registers.",
            company: "San José Hospital, Loja Ecuador",
            link: "https://github.com/ljmor/proyecto-clinica-sanjose",
            // link2: "https://github.com/ljmor/proyecto-clinica-sanjose_backend",
            projectsBadges: [
                <Badge colorScheme="red">Node.js</Badge>,
                <Badge colorScheme="blue">Express</Badge>,
                <Badge colorScheme="green">MySQL</Badge>,
                <Badge colorScheme="blue">React</Badge>
            ]
        },
        {
            name: "Users Segmentation for study and market analysis in Clipp Events App",
            description: "Process of EDA, models selection (Clustering for users segmentation and Linear regression for app demand prediction) and strategies to take about the results obtained from our entire analysis",
            body: "Develop of machine learning algorithms to target the best strategies for increment users in Clipp Events App, Kmeans clustering model to segmentate users, we grouped them by fidelity over time and the preferent type of shows consumed. Futhermore we develop a linear regression model with the capability to predict the number of shows a user could acquire, with this info we show the company the best  potentialmarketing strategies for increment users demand on Clipp Events App",
            company: "Clipp SAS",
            link: "https://github.com/ljmor/marketseg-clustering-clipp",
            projectsBadges: [
                <Badge colorScheme="teal" >Machine Learning</Badge>,
                <Badge colorScheme="cyan" >Sklearn</Badge>,
                <Badge colorScheme="cyan" >Pandas</Badge>
            ]
        },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "ease-in-out",
        responsive: [
            {
                breakpoint: 908,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Función para abrir el modal y establecer el proyecto seleccionado
    const handleLearnMoreClick = (project) => {
        setSelectedProject({ title: project.name, body: project.body, company: project.company, to: project.link, badges: project.projectsBadges });
        onOpen(); // Abre el modal
    };

    return (
        <Box
            py={10}
            px={4}
            bg="gray.900"
            width='100%'
            justifyContent='center'
            alignContent='center'
            height='700px'
            ref={modalFocusRef}
            id="projects"
            className="element"
        >
            <Box mb={{ base: '50px', md: '60px' }} mt='-50px'>
                <Heading as="h2" size="xl" mb={6} color="white" textAlign="center">
                    Projects
                </Heading>
                <Text color="whiteAlpha.800" mb={10} textAlign="center" fontSize="lg">
                    Discover some of my work below, showcasing my skills and experience.
                </Text>
            </Box>

            <Box width='90%' mx='auto'>
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <Box
                            key={index}
                            px={10}
                            py={3}
                            bg="white"
                            borderRadius="16px"
                            boxShadow="lg"
                            transition="transform 0.2s ease"
                            width={{ base: '50%', md: '60%', lg: '80%' }}
                            height={{ base: '450px', lg: '400px', xl: '390px' }}
                            mx="auto"
                            textAlign="center"
                            border="2px solid #E2E8F0"
                            _hover={{ transform: "scale(1.03)" }}
                        >
                            <Stack display='flex' justifyContent='space-around' direction='column' height='100%' width='100%'>
                                <Box height='75%' my='10px' display='flex' flexDirection='column' justifyContent='space-evenly'>
                                    <Heading as="h3" size="md" color="gray.800">
                                        {project.name}
                                    </Heading>
                                    <Text
                                        alignSelf='center'
                                        textAlign='left'
                                        color="gray.600"
                                        mt='10px'
                                    >
                                        {project.description}
                                    </Text>
                                </Box>

                                <Box alignSelf='flex-end' flexDirection='row' height='25%' width='100%' mb='5px' _hover={{ '.arrow-more': { transform: "translateX(5px)" } }}>
                                    <HStack>
                                        {project.projectsBadges}
                                    </HStack>
                                    <Box textAlign='left' mb='5px' mt='10px'>
                                        <Text fontSize="sm" fontWeight="bold" color="gray.500">
                                            {project.company}
                                        </Text>
                                    </Box>
                                    <Box
                                        textAlign='right'
                                        display="flex"
                                        width='100%'
                                        justifyContent='right'
                                        alignItems='center'
                                        onClick={() => handleLearnMoreClick(project)} // Llama la función para abrir el modal
                                        cursor='pointer'
                                    >
                                        <Text color="blue.600" fontWeight="bold">Learn More</Text>
                                        <Icon as={FiArrowRight} className='arrow-more' ml={2} color="blue.600" transition="transform 0.3s ease" />
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    ))}
                </Slider>
            </Box>

            {/* Modal para mostrar detalles del proyecto */}
            <ModalProject
                isOpen={isOpen}
                onClose={onClose}
                title={selectedProject.title}
                body={selectedProject.body}
                company={selectedProject.company}
                to={selectedProject.to}
                badges={selectedProject.badges}
                focusRef={modalFocusRef}
            />
        </Box>
    );
};

// Custom arrow components
const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Icon
            as={FiArrowRight}
            className={className}
            style={{ ...style, display: "block", right: "-25px" }}
            color="white"
            fontSize="2xl"
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <Icon
            as={FiArrowLeft}
            className={className}
            style={{ ...style, display: "block", left: "-25px" }}
            color="white"
            fontSize="2xl"
            onClick={onClick}
        />
    );
};
