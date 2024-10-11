import { Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar"
import './index.css';
import { AboutMe } from "./components/AboutMe";
import { Testimonials } from "./components/Testimonials";
import { Projects } from "./components/Projects";

export const PortafolioApp = () => {
    return (
        <Box bgColor='#121212'>
            <NavBar/>
            <Header/>
            <AboutMe/>
            <Testimonials/>
            <Projects/>
        </Box>
    )
}
