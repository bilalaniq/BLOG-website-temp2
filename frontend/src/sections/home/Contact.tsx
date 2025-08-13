

// chakra-ui
import { Box, Button, Image, Flex, Stack, Text } from "@chakra-ui/react";

// icons and images
import { IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconMail, IconBrandDiscord} from '@tabler/icons-react';

import { isBikatr7URL } from '../../utils';

import face from '../../assets/images/personals/NUllsect.jpeg';

function Contact() {
    return (
        <Box p={4} textAlign="center">
            <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center" mb={4}>
                <Image
                    borderRadius="full"
                    boxSize="150px"
                    src={face}
                    alt="Bilal aniq"
                    mr={{ base: 0, md: 8 }}
                    mb={{ base: 4, md: 0 }}
                />
                <Box textAlign="left">
                    <Text fontSize="lg" fontWeight="bold">
                        {isBikatr7URL() ? "Bilal aniq (Null sect)" : "Bilal aniq"}
                    </Text>
                    <Text fontSize="md" color="gray.500" mb={4}>
                        bilalaniq2@gmail.com
                    </Text>
                    <Stack spacing={4} justifyContent="flex-start">
                        <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justifyContent="flex-start">
                            <Button as="a" href="mailto:bilalaniq2@gmail.com" leftIcon={<IconMail />} rounded="full" _hover={{ color: 'yellow', transform: 'scale(1.01)'}} _active={{ transform: 'scale(0.99)'}} variant="outline">
                                Mail
                            </Button>
                            <Button as="a" href="https://www.linkedin.com/in/muhammad-bilal-b159a5292/" leftIcon={<IconBrandLinkedin />} rounded="full" _hover={{ color: 'yellow', transform: 'scale(1.01)'}} _active={{ transform: 'scale(0.99)'}} variant="outline">
                                LinkedIn
                            </Button>
                            <Button as="a" href="https://github.com/bilalaniq" leftIcon={<IconBrandGithub />} rounded="full" _hover={{ color: 'yellow', transform: 'scale(1.01)'}} _active={{ transform: 'scale(0.99)'}} variant="outline">
                                GitHub
                            </Button>
                        </Stack>
                        <Stack direction="row" spacing={4} justifyContent="center">
                            <Button as="a" href="https://discord.com/users/bilalaniq2" leftIcon={<IconBrandDiscord />} rounded="full" _hover={{ color: 'yellow', transform: 'scale(1.01)'}} _active={{ transform: 'scale(0.99)'}} variant="outline">
                                Discord
                            </Button>
                            <Button as="a" href="https://twitter.com/" leftIcon={<IconBrandTwitter />} rounded="full"_hover={{ color: 'yellow', transform: 'scale(1.01)'}} _active={{ transform: 'scale(0.99)'}} variant="outline">
                                Twitter
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Flex>
            <Box textAlign="center" ml={5} mr={20}>
                <Text fontSize="md" color="gray.500" marginBottom="4">
                    Feel free to reach out about anything! I'm always open to new opportunities and collaborations.
                </Text>
            </Box>
            <Box textAlign="center" ml={5} mr={20} mt={4} mb={100}>
                <Text fontSize="md" color="gray.500">
                    And if email isn't your thing, feel free to reach out to me on discord or any of my other socials!
                </Text>
            </Box>
        </Box>
    );
}

export default Contact;