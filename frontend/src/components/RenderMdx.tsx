// src/components/BlogPost.tsx
import React from 'react';
import { Box, Text, Heading, Tag, HStack, VStack, Image } from '@chakra-ui/react';
import { useTheme } from '../contexts/ThemeContext';

const BlogPost: React.FC<{ post: any }> = ({ post }) => {
  const { isRetro } = useTheme();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Box
      bg="black"
      color={isRetro ? 'purple.400' : 'white'}
      w="100%"
      px={{ base: 4, md: 12 }}
      py={0} // Changed from py={{ base: 8, md: 16 }} to py={0}
      display="flex"
      justifyContent="center"
    >
      <VStack spacing={6} align="stretch" maxW="900px" w="100%">
        {/* Hero Section */}
        <Box textAlign="center" mb={4}>
          <Heading as="h1" size="3xl" mb={4} color={isRetro ? 'purple.300' : 'yellow.300'}>
            {post.title}
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color={isRetro ? 'purple.200' : 'gray.300'}>
            {formattedDate} • by {post.author}
          </Text>
          {post.tags?.length > 0 && (
            <HStack spacing={3} justifyContent="center" mt={3} flexWrap="wrap">
              {post.tags.map((tag: string) => (
                <Tag
                  key={tag}
                  colorScheme={isRetro ? 'purple' : 'yellow'}
                  variant="solid"
                  size="md"
                  boxShadow={isRetro ? '0 0 5px purple' : '0 0 5px yellow'}
                >
                  {tag}
                </Tag>
              ))}
            </HStack>
          )}
        </Box>

        {/* Description */}
        {post.description && (
          <Box
            bg={isRetro ? 'purple.900' : 'yellow.900'}
            p={{ base: 5, md: 8 }}
            borderRadius="xl"
            border="2px solid"
            borderColor={isRetro ? 'purple.600' : 'yellow.600'}
            boxShadow={
              isRetro
                ? '0 0 20px purple, 0 0 40px pink'
                : '0 0 15px rgba(255, 255, 0, 0.5), 0 0 30px rgba(255, 165, 0, 0.2)'
            }
            mb={6}
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="tall"
              color={isRetro ? 'purple.100' : 'yellow.100'}
              textShadow={isRetro ? '0 0 3px purple' : '0 0 2px rgba(255, 255, 0, 0.5)'}
            >
              {post.description}
            </Text>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default BlogPost;
