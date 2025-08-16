import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import F_blog from './pages/blogs/my-first-post';

function Layout() {
    return (
        <>
            <Navbar />
            <Container maxW="6xl" flex="1">
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}

function Router({ showContent, toggleContent, contentLoaded }: {
    showContent: any,
    toggleContent: any,
    contentLoaded: any
}) {
    const routes = [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <HomePage
                        showContent={showContent}
                        toggleContent={toggleContent}
                        contentLoaded={contentLoaded}
                    />
                },
                { path: 'portfolio', element: <PortfolioPage /> },
                { path: 'blog', element: <BlogPage /> },
                { path: 'blog/my-first-post', element: <F_blog /> }
            ]
        }
    ];

    const router = createBrowserRouter(routes, {
        basename: import.meta.env.BASE_URL // Add this line
    });

    return <RouterProvider router={router} />;
}

export default Router;