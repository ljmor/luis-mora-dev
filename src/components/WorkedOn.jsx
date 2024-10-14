import { Box, Flex, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";

const companies = [
  { name: "Camara de Comercio de Loja", logo: "./assets/images/camcom-logo.png", size: "140px", currentColor: "" },
  { name: "Clipp App", logo: "./assets/images/clipp-logo.png", size: "125px", currentColor: "#376642" },
  { name: "Hospital Clínica San Jose", logo: "./assets/images/sanjosehosp-logo.png", size: "110px", currentColor: "#376642" }
  // Añade más compañías aquí
];

export const WorkedOn = () => {
  return (
    <Box bg="#121212" p={8} borderRadius="lg" boxShadow="md" mt='10' mb='10' width='90%' mx='auto' cursor='default'>
      <Box>
        <Text fontSize="2xl" color="white" textAlign='center' mb={6}>
          Worked On
        </Text>
      </Box>

      <Wrap spacing={10} justify="center">
        {companies.map((company, index) => (
          <WrapItem key={index}>

            <Box gap={10}>
              <Flex
                direction="column"
                align="center"
                bg="whiteAlpha.100"
                p={4}
                borderRadius="5px"
                boxShadow={`0 0 5px 1px ${company.currentColor}`}
                width="230px"
                height="95px"
                justifyContent='center'
                borderColor='whiteAlpha.200'
                borderWidth='1px'
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.size}
                  mb={2}
                  filter='drop-shadow(3px 3px 7px black)'
                />
              </Flex>

              <Text fontSize="md" color="#33b050" textAlign='center' mt='8px' fontWeight='semibold'>
                { company.currentColor !== '' ? 'Currently' : '' }
              </Text>
            </Box>

          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
