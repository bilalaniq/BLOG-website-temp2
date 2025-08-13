// react
import { useEffect } from 'react';

// chakra-ui
import { Box } from "@chakra-ui/react";

// custom components
import NamedDivider from '../components/NamedDivider';
import StorageNoticeModal from '../components/StorageNoticeModal';
import EmbedSEO from '../components/EmbedSEO';

import Preface from '../sections/home/Preface';
import HomeIntroduction from '../sections/home/HomeIntroduction';
import HomeProjects from '../sections/home/HomeProjects';
import Skills from '../sections/common/Skills';
import AboutMe from '../sections/home/AboutMe';
import Contact from '../sections/home/Contact';

import { useTheme } from '../contexts/ThemeContext';
import { isBikatr7URL } from '../utils';

function HomePage({ showContent, toggleContent, contentLoaded }: { showContent: boolean, toggleContent: any, contentLoaded: boolean }) {
    const { isRetro } = useTheme();
    const isBikatr7 = isBikatr7URL();

    useEffect(() => {
        if (!showContent) {
            const timer = setTimeout(() => {
                toggleContent();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showContent, toggleContent]);

    return (
        <Box
            bg="black"
            color="white"
            minHeight="83vh"
            className={isRetro ? 'retro-mode' : ''}
        >
            <EmbedSEO
                title="NULL Sect | Portfolio & Blog"
                description="Explore projects, blog posts, and contact information for cyber security professional Muhammad bilal"
                image="https://avatars.githubusercontent.com/u/138587693?s=400&u=817017ea87c982bdffe2140ce483e6e00e1ad1df&v=4"
                imageAlt="nullsect Profile Picture"
                url={window.location.href}
            />
            <Preface
                showContent={showContent}
                toggleContent={toggleContent}
            />
            <NamedDivider
                name="Introduction"
                id="introduction"
            />
            <HomeIntroduction />

            {isRetro ? (
                <>
                    <NamedDivider
                        name="[Projects]"
                        id="projects"
                    />
                    <HomeProjects />
                </>
            ) : (
                <>
                    <NamedDivider
                        name={showContent ? "Projects" : "Loading..."}
                        id="projects"
                    />
                    {contentLoaded && showContent && (
                        <>
                            <HomeProjects />
                            <NamedDivider name="Skills" id="skills" />
                            <Skills />
                            <NamedDivider name="About Me" id="aboutme" />
                            <AboutMe />
                            <NamedDivider name="Contact" id="contact" />
                            <Contact />
                        </>
                    )}
                </>
            )}
            {!isBikatr7 && <StorageNoticeModal />}
        </Box>
    );
}

export default HomePage;