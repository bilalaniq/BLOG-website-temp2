

// helmet
import { Helmet } from 'react-helmet-async';

// utils
import { isBikatr7URL } from '../utils';

const GlobalSEO: React.FC = () => {
  const isBikatr7 = isBikatr7URL();
  const siteName = isBikatr7 ? 'Null Sect' : 'Bilal aniq';
  const siteUrl = isBikatr7 ? 'https://Nullsect.com' : 'https://bilalaniq.com';

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    description: `Personal portfolio and blog of ${siteName}, showcasing projects, skills, experience, and blog posts about software engineering and technology.`,
    author: {
      '@type': 'Person',
      name: 'Bilal aniq',
      alternateName: 'Null Sect',
      url: siteUrl,
      sameAs: [
        'https://github.com/bilalaniq',
        'https://www.linkedin.com/in/muhammad-bilal-b159a5292/',
        'https://bilalaniq.com',
        'https://Nullsect.com'
      ],
      jobTitle: 'Software Engineer',
      knowsAbout: [
        'Python',
        'TypeScript',
        'React',
        'Machine Learning',
        'Software Engineering',
        'Web Development'
      ]
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?search={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    publisher: {
      '@type': 'Person',
      name: siteName,
      url: siteUrl
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bilal aniq',
    alternateName: 'Null sect',
    url: siteUrl,
    image: `${siteUrl}/kb.webp`,
    description: 'Software Engineer specializing in Python, TypeScript, React, and Machine Learning',
    jobTitle: 'Software Engineer',
    sameAs: [
      'https://github.com/bilalaniq',
      'https://www.linkedin.com/in/muhammad-bilal-b159a5292/',
      'https://bilalaniq.com',
      'https://Nullsect.com'
    ],
    knowsAbout: [
      'Python Programming',
      'TypeScript Development',
      'React Framework',
      'Machine Learning',
      'Natural Language Processing',
      'Web Development',
      'Software Engineering',
      'Database Management',
      'API Development'
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'University of Colorado Colorado Springs',
      sameAs: 'https://www.uccs.edu/'
    }
  };

  return (
    <Helmet>
      {/* Global Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Person/Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default GlobalSEO;