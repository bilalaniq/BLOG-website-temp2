// src/pages/BlogPostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { allBlogs } from '../../../.contentlayer/generated';
import BlogPost from '../../components/RenderMdx';
import { Box } from '@chakra-ui/react';
// src/pages/blogs/my-first-post.tsx
import {
    BlogHeading1,
    BlogHeading2,
    BlogHeading3, // Add this import
    BlogParagraph,
    BlogImage,
    BlogTable,
    BlogCodeBlock,
    BlogUnorderedList,
    BlogListItem,
    BlogQuote,
    BlogDivider,
    BlogLink
} from '../../components/blog/BlogComponents';

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = allBlogs.find(b => b.url.includes(slug ?? ''));

    if (!post) {
        return (
            <Box textAlign="center" p="5rem" color="white">
                <BlogHeading1>Post not found</BlogHeading1>
            </Box>
        );
    }

    return (
        <Box bg="black" minHeight="100vh" w="100%">
            <BlogPost post={post} />

            <Box px={{ base: 4, md: 12 }} py={8} maxW="900px" mx="auto">
                <BlogHeading1>Clean Code Principles</BlogHeading1>

                <BlogParagraph>
                    Writing maintainable code is crucial for long-term project success.
                    Here are some key principles every developer should follow.
                </BlogParagraph>

                {/* <BlogImage src="/images/clean-code.jpg" alt="Clean code example" /> */}

                <BlogHeading2>Core Principles</BlogHeading2>

                <BlogUnorderedList>
                    <BlogListItem>Single Responsibility Principle</BlogListItem>
                    <BlogListItem>Meaningful Variable Names</BlogListItem>
                    <BlogListItem>Small, Focused Functions</BlogListItem>
                    <BlogListItem>Consistent Code Style</BlogListItem>
                </BlogUnorderedList>

                <BlogQuote>
                    "Always code as if the person who ends up maintaining your code
                    will be a violent psychopath who knows where you live."
                </BlogQuote>

                <BlogDivider />

                <BlogHeading2>Code Examples</BlogHeading2>

                <BlogCodeBlock code={`// Bad
function processData(input) {
  // 50 lines of complex logic
  return result;
}

// Good
function validateInput(input) {
  // validation logic
}

function transformData(validInput) {
  // transformation logic
}

function processData(input) {
  const validInput = validateInput(input);
  return transformData(validInput);
}`} />

                <BlogHeading3>Performance Comparison</BlogHeading3>

                <BlogTable
                    headers={['Approach', 'Readability', 'Maintainability', 'Performance']}
                    rows={[
                        ['Monolithic', 'Low', 'Low', 'High'],
                        ['Modular', 'Highsdsldksldksdlskdlsdksldksdlksdlsdksldksdlkdslksdlksdsdsdsdsdsdsdsdsdsdsmkwdklksdklpgjksdklfjksdf`', 'High', 'Medium'],
                        ['Microservices', 'Medium', 'Medium', 'Low']
                    ]}
                />

                <BlogParagraph>
                    For more information, check out <BlogLink href="https://example.com/clean-code">
                        Clean Code by Robert C. Martin</BlogLink>.
                </BlogParagraph>
            </Box>
        </Box>
    );
};

export default BlogPostPage;