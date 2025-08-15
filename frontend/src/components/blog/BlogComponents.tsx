// src/components/blog/BlogComponents.tsx
import {
  Box, Text, Heading, Image, Code, Table, Thead, Tbody, Tr, Th, Td,
  UnorderedList, OrderedList, ListItem, Link, Divider
} from '@chakra-ui/react';
import { useTheme } from '../../contexts/ThemeContext';
import React from 'react'; // Required import


// ================ TEXT COMPONENTS ================
export const BlogHeading1 = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Heading
      as="h1"
      size="2xl"
      my={6}
      color={isRetro ? 'purple.300' : 'yellow.300'}
      textShadow={isRetro ? '0 0 5px purple' : '0 0 5px yellow'}
    >
      {children}
    </Heading>
  );
};

export const BlogHeading2 = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Heading
      as="h2"
      size="xl"
      my={5}
      color={isRetro ? 'purple.300' : 'yellow.300'}
      borderBottom="1px solid"
      borderColor={isRetro ? 'purple.600' : 'yellow.600'}
      pb={2}
    >
      {children}
    </Heading>
  );
};

export const BlogHeading3 = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Heading
      as="h3"
      size="lg"
      my={4}
      color={isRetro ? 'purple.200' : 'yellow.200'}
    >
      {children}
    </Heading>
  );
};

export const BlogParagraph = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Text
      my={4}
      lineHeight="tall"
      color={isRetro ? 'purple.200' : 'gray.300'}
    >
      {children}
    </Text>
  );
};

export const BlogQuote = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Box
      borderLeft="4px solid"
      borderColor={isRetro ? 'purple.500' : 'yellow.500'}
      pl={4}
      my={6}
      fontStyle="italic"
      color={isRetro ? 'purple.200' : 'gray.300'}
    >
      {children}
    </Box>
  );
};

// ================ LIST COMPONENTS ================
export const BlogUnorderedList = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <UnorderedList
      my={4}
      pl={6}
      color={isRetro ? 'purple.200' : 'gray.300'}
    >
      {children}
    </UnorderedList>
  );
};

export const BlogOrderedList = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <OrderedList
      my={4}
      pl={6}
      color={isRetro ? 'purple.200' : 'gray.300'}
    >
      {children}
    </OrderedList>
  );
};

export const BlogListItem = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <ListItem
      my={2}
      color={isRetro ? 'purple.200' : 'gray.300'}
    >
      {children}
    </ListItem>
  );
};

// ================ MEDIA COMPONENTS ================
export const BlogImage = ({ src, alt }: { src: string; alt: string }) => {
  const { isRetro } = useTheme();
  return (
    <Box my={6}>
      <Image
        src={src}
        alt={alt}
        borderRadius="lg"
        maxH="400px"
        objectFit="cover"
        mx="auto"
        border={isRetro ? '2px solid purple' : '2px solid yellow'}
        boxShadow={isRetro ? '0 0 20px purple' : '0 0 15px yellow'}
      />
    </Box>
  );
};

// ================ CODE COMPONENTS ================
export const BlogCodeBlock = ({ code }: { code: string }) => {
  const { isRetro } = useTheme();

  const highlightedCode = code.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {line.trim().startsWith('//') ? (
        <span style={{ color: isRetro ? '#ff79c6' : '#5dade2' }}>{line}</span>
      ) : (
        line
      )}
      <br />
    </React.Fragment>
  ));

  return (
    <Box
      as="pre"
      p={4}
      my={6}
      bg={isRetro ? 'purple.900' : 'yellow.900'}
      borderRadius="md"
      border="1px solid"
      borderColor={isRetro ? 'purple.600' : 'yellow.600'}
      overflowX="auto"
    >
      <Code
        color={isRetro ? 'purple.100' : 'yellow.100'}
        display="block"
        whiteSpace="pre-wrap"
        fontFamily="monospace"
      >
        {highlightedCode}
      </Code>
    </Box>
  );
};



export const BlogInlineCode = ({ children }: { children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Code
      color={isRetro ? 'purple.300' : 'yellow.300'}
      bg={isRetro ? 'purple.900' : 'yellow.900'}
      px={2}
      py={1}
      borderRadius="md"
    >
      {children}
    </Code>
  );
};

// ================ TABLE COMPONENT ================
interface BlogTableProps {
  headers: string[];
  rows: string[][];
}

export const BlogTable: React.FC<BlogTableProps> = ({ headers, rows }) => {
  const { isRetro } = useTheme();

  return (
    <Box my={6} overflowX="auto">
      <Table
        variant="simple"
        borderColor={isRetro ? 'purple.600' : 'yellow.600'}
      >
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th
                key={index}
                color={isRetro ? 'purple.300' : 'yellow.300'}
                borderColor={isRetro ? 'purple.600' : 'yellow.600'}
                whiteSpace="nowrap"
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td
                  key={cellIndex}
                  borderColor={isRetro ? 'purple.600' : 'yellow.600'}
                  color={isRetro ? 'purple.200' : 'gray.300'}
                  wordBreak="break-word"
                  maxW="300px"
                >
                  {cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

// ================ DIVIDER COMPONENT ================
export const BlogDivider = () => {
  const { isRetro } = useTheme();
  return (
    <Divider
      my={6}
      borderColor={isRetro ? 'purple.600' : 'yellow.600'}
    />
  );
};

// ================ LINK COMPONENT ================
export const BlogLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { isRetro } = useTheme();
  return (
    <Link
      href={href}
      color={isRetro ? 'purple.300' : 'yellow.300'}
      textDecoration="underline"
      _hover={{
        textDecoration: 'none',
        color: isRetro ? 'purple.200' : 'yellow.200'
      }}
    >
      {children}
    </Link>
  );
};