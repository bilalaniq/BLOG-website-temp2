
// chakra-ui
import { Box } from "@chakra-ui/react";

// helmet
import { Helmet } from 'react-helmet-async';

// components
import { Card, Item } from "../../components/Card";

// logos


function PortfolioProjects() {
    const projectsSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Software Development Projects',
        description: 'Portfolio of development projects by Bilal Aniq',
        itemListElement: [
            // {
            //     '@type': 'SoftwareApplication',
            //     name: 'Kudasai',
            //     description: 'Japanese translation application using multiple APIs',
            //     url: 'https://github.com/Bikatr7/kudasai',
            //     applicationCategory: 'Translation Software',
            //     operatingSystem: 'Cross-platform',
            //     programmingLanguage: ['Python'],
            //     author: {
            //         '@type': 'Person',
            //         name: 'Bilal Aniq'
            //     }
            // },
            {
                '@type': 'WebSite',
                name: 'bilalaniq.com',
                description: 'Personal portfolio website',
                url: 'https://bilalaniq.com',
                author: {
                    '@type': 'Person',
                    name: 'Bilal Aniq'
                },
                programmingLanguage: ['TypeScript', 'Python']
            },
            // {
            //     '@type': 'SoftwareApplication',
            //     name: 'EasyTL',
            //     description: 'Translation API wrapper library',
            //     url: 'https://github.com/Bikatr7/EasyTL',
            //     applicationCategory: 'Software Library',
            //     programmingLanguage: ['Python'],
            //     author: {
            //         '@type': 'Person',
            //         name: 'Kaden Bilyeu'
            //     }
            // }
        ]
    };

    return (
        <Box>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(projectsSchema)}
                </script>
            </Helmet>
            <Card title="Projects">
                <Item
                    title="projecrt title"
                    dateRange="add here date range"
                    description={[
                        "add here project description",
                    ]}
                    // imageUrl={kudasai_logo}  add image url here
                    // imageAlt="Kudasai Logo"
                    websiteUrl="https://example.com" // replace with actual website URL
                    githubUrl="https://github.com/example/repo" // replace with actual GitHub URL
                    tags={["Open Source", "Python", "Hugging Face", "sPacy", "Google Translate", "DeepL", "OpenAI", "Gemini", "Gradio"]}
                    useBulletPoints={false}
                />
                
            </Card>
        </Box>
    );
}

export default PortfolioProjects;