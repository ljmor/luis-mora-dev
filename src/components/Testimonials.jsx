import {
    Box,
    Flex,
    Heading,
    Text,
    Avatar,
    Icon,
    Stack,
} from "@chakra-ui/react";
import { FaQuoteLeft } from "react-icons/fa";

export const Testimonials = () => {
    return (
        <Box bg="#121212" color="white" py={10} px={5} cursor='default'>
            <Box textAlign="center" mb={10}>
                <Heading as="h2" size="xl" color="white" mb={4}>
                    Testimonials
                </Heading>
                <Text fontSize="lg" color="gray.400">
                    See what people are saying about me
                </Text>
            </Box>

            <Flex direction="column" wrap="wrap" justify="center" gap={10}>
                <Flex direction={{ base: "column", md: "row" }} justify="space-around" gap={6}>
                    {/* Testimonial 1 */}
                    <Box
                        className="borderQuote"
                        bg="blackAlpha.600"
                        p={6}
                        borderRadius="22"
                        width={{ base: "100%", md: "35%", lg: "35%", xl: "23%" }}
                        ml='auto' mr={1}
                    >
                        <Icon as={FaQuoteLeft} w={8} h={8} color="white" mb={4} />
                        <Text fontSize="md" mb={4}>
                            "Working with Luis was a fantastic experience. His skills in both frontend and backend development are exceptional."
                        </Text>
                        <Stack direction="row" spacing={4} align="center">
                            <Avatar name="John Doe" src="/path-to-avatar1.jpg" />
                            <Box>
                                <Text fontWeight="bold">John Doe</Text>
                                <Text fontSize="sm" color="gray.400">Company XYZ</Text>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Testimonial 2 */}
                    <Box
                        bg="blackAlpha.600"
                        p={6}
                        borderRadius="22"
                        width={{ base: "100%", md: "35%", lg: "35%", xl: "23%" }}
                        mr='auto' ml={1}
                    >
                        <Icon as={FaQuoteLeft} w={8} h={8} color="white" mb={4} />
                        <Text fontSize="md" mb={4}>
                            "Luis always delivers high-quality work on time and communicates effectively."
                        </Text>
                        <Stack direction="row" spacing={4} align="center">
                            <Avatar name="Jane Smith" src="/path-to-avatar2.jpg" />
                            <Box>
                                <Text fontWeight="bold">Jane Smith</Text>
                                <Text fontSize="sm" color="gray.400">Company ABC</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Flex>

                <Flex direction={{ base: "column", md: "row" }} justify="space-around" gap={6}>
                    {/* Testimonial 3 */}
                    <Box
                        bg="blackAlpha.600"
                        p={6}
                        borderRadius="22"
                        width={{ base: "100%", md: "35%", lg: "35%", xl: "23%" }}
                        ml='auto' mr={1}
                    >
                        <Icon as={FaQuoteLeft} w={8} h={8} color="white" mb={4} />
                        <Text fontSize="md" mb={4}>
                            "His problem-solving skills and technical expertise make him a valuable asset to any project."
                        </Text>
                        <Stack direction="row" spacing={4} align="center">
                            <Avatar name="Carlos Rivera" src="/path-to-avatar3.jpg" />
                            <Box>
                                <Text fontWeight="bold">Carlos Rivera</Text>
                                <Text fontSize="sm" color="gray.400">Tech Solutions</Text>
                            </Box>
                        </Stack>
                    </Box>

                    {/* Testimonial 4 */}
                    <Box
                        bg="blackAlpha.600"
                        p={6}
                        borderRadius="22"
                        width={{ base: "100%", md: "35%", lg: "35%", xl: "23%" }}
                        mr='auto' ml={1}
                    >
                        <Icon as={FaQuoteLeft} w={8} h={8} color="white" mb={4} />
                        <Text fontSize="md" mb={4}>
                            "Luis is a great team player and consistently exceeds expectations."
                        </Text>
                        <Stack direction="row" spacing={4} align="center">
                            <Avatar name="Emily Johnson" src="/path-to-avatar4.jpg" />
                            <Box>
                                <Text fontWeight="bold">Emily Johnson</Text>
                                <Text fontSize="sm" color="gray.400">StartUp Inc.</Text>
                            </Box>
                        </Stack>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

