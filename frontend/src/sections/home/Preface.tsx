

// chakra-ui
import { Button, Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react';

// icons and images
import { IconBrandGithub } from '@tabler/icons-react';

import face from '../../assets/images/personals/bilal.jpg';
import bikatr7Logo from '../../assets/images/personals/NUllsect.jpeg';
import { useTheme } from '../../contexts/ThemeContext';

import { keyframes } from '@emotion/react';

const scrollingTextKeyframes = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

function Preface({ showContent, toggleContent }: { showContent: boolean, toggleContent: () => void }) {
    const { isRetro } = useTheme();

    const handleClick = () => {
        if (!showContent) {
            toggleContent();
        }
    };

    return (
        <Stack direction={{ base: 'column', md: 'row' }} bg="black" id="home" paddingTop={5} >
            <Flex
                p={8}
                flex={1}
                align="center"
                justify={isRetro ? "flex-start" : "flex-start"}
            >
                <Stack spacing={6} w="full" maxW="xl">
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as="span"
                            position="relative"
                            fontFamily={isRetro ? "'Press Start 2P', monospace" : "inherit"}
                            color={isRetro ? "purple.200" : "white"}
                        >
                            {isRetro ? "Null Sect" : "Bilal Aniq"}
                        </Text>
                        <br />
                    </Heading>
                    {isRetro ? (
                        <Box
                            overflow="hidden"
                            width="100%"
                            position="relative"
                            border="2px solid"
                            borderColor="purple.400"
                            p={2}
                        >
                            <Text
                                fontSize={{ base: 'md', lg: 'lg' }}
                                color="purple.400"
                                fontFamily="'Press Start 2P', monospace"
                                whiteSpace="nowrap"
                                animation={`${scrollingTextKeyframes} 7s linear infinite`}
                                display="inline-block"
                            >
                                SYSTEM ONLINE: Welcome to a mediocre website
                            </Text>
                        </Box>
                    ) : (
                        <>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                I am a passionate Cybersecurity Enthusiast pursuing a Bachelor of Science in Cybersecurity at Air University, Islamabad, graduating in 2027, with a keen interest in understanding digital security, developing skills to protect against cyber threats, staying updated on the latest trends in cybersecurity, and contributing to making the digital world a safer place.


                            </Text>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.500">
                                Eligible for security clearance. Proud Pakistani citizen.
                            </Text>
                        </>
                    )}
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        {!isRetro && (
                            <>
                                <Button
                                    rounded="full"
                                    as="a"
                                    href={showContent ? "#aboutme" : undefined}
                                    onClick={handleClick}
                                    _hover={{ color: 'yellow', transform: 'scale(1.01)' }}
                                    _active={{ transform: 'scale(0.99)' }}
                                >
                                    More about me
                                </Button>
                                <Button
                                    as="a"
                                    href="/portfolio"
                                    rounded="full"
                                    _hover={{ color: 'yellow', transform: 'scale(1.01)' }}
                                    _active={{ transform: 'scale(0.99)' }}
                                >
                                    My Portfolio
                                </Button>
                            </>
                        )}
                        <Button
                            as="a"
                            href="/blog"
                            rounded={isRetro ? "none" : "full"}
                            border={isRetro ? "2px solid" : "none"}
                            borderColor={isRetro ? "purple.400" : "transparent"}
                            bg={isRetro ? "black" : undefined}
                            color={isRetro ? "purple.200" : undefined}
                            fontFamily={isRetro ? "'Press Start 2P', monospace" : "inherit"}
                            _hover={{
                                color: isRetro ? 'purple.400' : 'yellow',
                                transform: 'scale(1.01)'
                            }}
                            _active={{ transform: 'scale(0.99)' }}
                        >
                            My Blog
                        </Button>
                        <Button
                            as="a"
                            href="https://github.com/bilalaniq"
                            leftIcon={<IconBrandGithub />}
                            rounded={isRetro ? "none" : "full"}
                            border={isRetro ? "2px solid" : "none"}
                            borderColor={isRetro ? "purple.400" : "transparent"}
                            bg={isRetro ? "black" : undefined}
                            color={isRetro ? "purple.200" : undefined}
                            fontFamily={isRetro ? "'Press Start 2P', monospace" : "inherit"}
                            _hover={{
                                color: isRetro ? 'purple.400' : 'yellow',
                                transform: 'scale(1.01)'
                            }}
                            _active={{ transform: 'scale(0.99)' }}
                        >
                            My Github
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            {!isRetro && (
                <Flex flex={1} direction="column" alignItems="center">
                    <Image
                        boxSize={200} // make profile picture smaller
                        alt="Bilal aniq's Profile Picture"
                        objectFit="cover"
                        src={face}
                        borderRadius="full"
                        mb={4} // reduce margin below
                    />
                    <Box
                        border="2px solid"
                        borderColor="gray.600"
                        bg="gray.900"
                        p={2} // smaller padding
                        borderRadius="md"
                        width={{ base: "90%", md: "300px" }} // smaller width
                    >
                        <Image
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=bilalaniq&theme=radical&title_color=FF6347"
                            alt="Bilal's WakaTime Graph"
                            width="100%" // fill box width
                            height="auto"
                        />
                    </Box>
                </Flex>
            )}

            {isRetro && (
                <Flex
                    flex={1}
                    direction="column"
                    justifyContent={{ base: 'center', lg: 'flex-start' }}
                    alignItems={{ base: 'center', lg: 'flex-start' }}
                    pl={{ base: 0, lg: 8 }}
                    mt={24}
                    width={{ base: "100%", lg: "auto" }}
                >
                    <Box mb={4}> {/* reduce margin below logo */}
                        <Image
                            boxSize={150} // smaller logo
                            alt="Bikatr7 Logo"
                            objectFit="cover"
                            src={bikatr7Logo}
                            border="2px solid"
                            borderColor="purple.400"
                        />
                    </Box>
                    <Box
                        border="2px solid"
                        borderColor="purple.400"
                        bg="black"
                        p={2} // smaller padding
                        width={{ base: "90%", lg: "300px" }} // smaller box width
                    >
                        <Image
                            src="https://github-readme-stats.vercel.app/api/top-langs/?username=bilalaniq&theme=radical&title_color=FF6347"
                            alt="NUll sect's WakaTime Graph"
                            width="100%"
                            height="auto"
                        />
                    </Box>
                </Flex>
            )}

        </Stack>
    );
}

export default Preface;