import { Box, Flex, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

const companies = [
  { name: "Company A", logo: "/dfs/camlogo.png" },
  { name: "Company B", logo: "/path/to/logoB.png" },
  { name: "Company C", logo: "/path/to/logoC.png" },
  { name: "Company D", logo: "/path/to/logoD.png" },
  // Añade más compañías aquí
];

export const WorkedOn = () => {
  return (
    <Box bg="#121212" p={8} borderRadius="lg" boxShadow="md" mt='16' width='90%' mx='auto' cursor='default'>
      <Box>
          <Text fontSize="2xl" color="white" textAlign='center' mb={6}>
            Worked On
          </Text>
      </Box>

      <Wrap spacing={10} justify="center">
        {companies.map((company, index) => (
          <WrapItem key={index}>
            <Flex
              direction="column"
              align="center"
              bg="whiteAlpha.100"
              p={4}
              borderRadius="5px"
              boxShadow="sm"
              width="230px"
              height="95px"
              justifyContent='center'
              borderColor='whiteAlpha.200'
              borderWidth='1px'
            >
              {/* <Image
                src={company.logo}
                alt={`${company.name} logo`}
                boxSize="60px"
                mb={2}
              /> */}
              <Text fontSize="md" color="white" fontWeight="bold">
                {company.name}
              </Text>
            </Flex>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
