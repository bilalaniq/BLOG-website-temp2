import { Box, VStack, Text, HStack, Tag } from '@chakra-ui/react';
import { useTheme } from '../contexts/ThemeContext';
import { allBlogs } from '../../.contentlayer/generated';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const BlogPage: React.FC = () =>
{
    const { isRetro } = useTheme();
    const navigate = useNavigate(); // use React Router

    const posts = allBlogs.sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

    const formatDate = (dateString: string) =>
    {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const handleClick = () =>
    {
        navigate('/blog/my-first-post'); // navigates to YoPage and updates URL
    };

    return (
        <Box
            bg="black"
            color={isRetro ? "purple.400" : "white"}
            minHeight="83vh"
            display="flex"
            flexDirection="column"
            alignItems="center"
            pt="5rem"
            pb="5rem"
            className={isRetro ? 'retro-mode' : ''}
        >
            <VStack spacing="1.5rem" width={["95%", "90%", "800px"]}>
                {posts.map(({ title, author, publishedAt, description, tags, _id }, index) => (
                    <Box
                        key={_id ?? index}
                        p="1rem"
                        border={isRetro ? "2px solid purple" : "2px solid gray"}
                        borderRadius="md"
                        width="100%"
                        bg={isRetro ? "black" : "rgba(0,0,0,0.7)"}
                        _hover={{
                            transform: "scale(1.02)",
                            transition: "all 0.2s",
                            cursor: "pointer",
                            borderColor: isRetro ? "white" : "yellow"
                        }}
                        onClick={handleClick} // navigate to /blog/yopage
                    >
                        <Text fontSize="xl" fontWeight="bold">
                            {title}
                        </Text>

                        <Text fontSize="sm" color={isRetro ? "purple.200" : "gray.300"}>
                            {formatDate(publishedAt)} by {author}
                        </Text>

                        {tags && tags.length > 0 && (
                            <HStack spacing="0.5rem" mt="0.5rem" flexWrap="wrap">
                                {tags.map((tag, idx) => (
                                    <Tag
                                        key={idx}
                                        size="sm"
                                        colorScheme={isRetro ? "purple" : "yellow"}
                                        borderRadius="full"
                                    >
                                        {tag}
                                    </Tag>
                                ))}
                            </HStack>
                        )}

                        <Box mt="0.5rem">
                            <Text>{description}</Text>
                        </Box>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default BlogPage;
