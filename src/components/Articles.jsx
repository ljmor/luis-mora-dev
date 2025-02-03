import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Stack,
    Badge,
} from "@chakra-ui/react";
import { IoDocumentText } from "react-icons/io5";

const articles = [
    {
        title: "Machine learning algorithms",
        platform: "Medium",
        lang: "Spanish",
        description: "Understanding main feautures of the most common machine learning algorithms.",
        link: "https://medium.com/@ljmor/algoritmos-de-machine-learning-c7662d64ab5a"
    },
    // Add more articles here..
];

export const Articles = () => {
    return (
        <Box
            bg="#121212"
            color="white"
            py={10}
            px={5}
            cursor='default'
            id="articles"
            className="element"
        >
            <Box textAlign="center" mb={10}>
                <Heading as="h2" size="xl" color="white" mb={4}>
                    Articles
                </Heading>
                <Text fontSize="lg" color="gray.400">
                    Some articles I have written over time
                </Text>
            </Box>

            <Flex direction="column" wrap="wrap" justify="center" gap={10}>
                {articles.reduce((rows, article, index) => {
                    if (index % 2 === 0) {
                        rows.push([article]);
                    } else {
                        rows[rows.length - 1].push(article);
                    }
                    return rows;
                }, []).map((row, rowIndex) => (
                    <Flex key={rowIndex} direction={{ base: "column", md: "row" }} justify="center" gap={6}>
                        {row.map((article, index) => (
                            <Box
                                key={index}
                                bg="blackAlpha.600"
                                p={6}
                                borderRadius="12"
                                width={{ base: "100%", md: "45%", lg: "30%" }}
                                maxHeight='230px'
                                boxShadow="lg"
                                transition="0.3s"
                                display='flex'
                                flexDirection='column'
                                // _hover={{ transform: "scale(1.05)" }}
                            >
                                <Heading as="h4" size="md" mb={2} color="whiteAlpha.900" display='flex' justifyContent='space-between'> 
                                    {article.title}
                                    <Box textAlign='right' fontSize='25px'><IoDocumentText/></Box>
                                </Heading>
                                <Text fontSize="sm" color="blue.300" mb={2}>
                                    {article.platform} 
                                    <Badge ml={3} bgColor='green.300' fontSize='11px' >{article.lang}</Badge>
                                </Text>
                                <Text fontSize="md" mb={6} color="gray.300">
                                    {article.description}
                                </Text>
                                <Box alignSelf='end'justifySelf='end' >
                                    <Button as="a" href={article.link} target="_blank" colorScheme="blue" size="sm">
                                        Read Article
                                    </Button>
                                </Box>
                            </Box>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};