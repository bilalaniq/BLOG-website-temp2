
// chakra-ui
import { Box, Stack, Flex, Text, Heading, Image } from "@chakra-ui/react";

// components
import NamedDivider from "../../components/NamedDivider";

// images
import face from "../../assets/images/personals/bilal.jpg";

import { isBikatr7URL } from "../../utils";

function PortfolioIntroduction() {
    return (
        <Box padding="5">
            <Stack direction={{ base: 'column', md: 'row' }} bg="black" id="home" paddingTop={5} >
                <Flex flex={1} justifyContent={{ base: 'center', md: 'flex-start' }} alignItems="center">
                    <Image boxSize={400} alt="Bilal aniq's Profile Picture" objectFit="cover" src={face} borderRadius={"full"} />
                </Flex>
                <Flex p={8} flex={1} align="center">
                    <Stack spacing={6} w="full" maxW="xl">
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text as="span" position="relative">
                                {isBikatr7URL() ? "Bilal aniq (Null sect)" : "Bilal Aniq"}
                            </Text>
                            <br />
                        </Heading>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                            I am a passionate Cybersecurity Enthusiast pursuing a Bachelor of Science in Cybersecurity at Air University, Islamabad, graduating in 2027, with a keen interest in understanding digital security, developing skills to protect against cyber threats, staying updated on the latest trends in cybersecurity, and contributing to making the digital world a safer place.

                        </Text>
                        <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                            Eligible for security clearance. U.S. Citizen.
                        </Text>
                    </Stack>
                </Flex>
            </Stack>
            <NamedDivider id="portfolio_page_separator" />
            <Text fontSize="md" marginBottom="4" color="gray.500">
                 you can also download my resume with that button in the top right.
            </Text>
        </Box>
    );
}

export default PortfolioIntroduction;