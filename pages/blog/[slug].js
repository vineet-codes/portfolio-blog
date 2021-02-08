import hydrate from 'next-mdx-remote/hydrate';
import Head from 'next/head';

import { getFiles, getFileBySlug } from '@/lib/mdx';
import { Page } from '@/styles/globalStyles';

import styled from 'styled-components';

const BlogTitle = styled.h1`
  padding-bottom: 0;
  margin-bottom: 0;
  color: #f1f1f1;
  font-weight: 800;
`;

const BlogStats = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.95rem;
`;

const Main = styled.main`
  /* width: 65ch; */
  /* margin: 0 auto; */
  #table-of-contents + ul a {
    text-decoration: none;
    color: #f1f1f1;
    border-bottom: 1px dashed lightgrey;
  }

  #table-of-contents ul li {
    list-style-position: outside;
  }

  #table-of-contents + ul a::before {
    content: '';
  }

  #table-of-contents + ul a:hover {
    color: tomato;
    border-bottom: 1px dashed ${(props) => props.theme.text};
  }

  h1,
  h2 {
    font-weight: 600;
  }

  h1 a {
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }

  h2 a {
    color: ${(props) => props.theme.text};
  }

  h1 > a :hover {
    text-decoration: underline;
  }
`;

export default function Blog({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource);

  return (
    <Page>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Main>
        <BlogTitle>{frontMatter.title}</BlogTitle>
        <BlogStats>
          By: Vineet Kumar Singh | {frontMatter.readingTime.text} |{' '}
          {frontMatter.wordCount} Words| Publication Date:{' '}
          {frontMatter.publishedAt}
        </BlogStats>
        {/* {JSON.stringify(frontMatter)} */}
        {content}
      </Main>
    </Page>
  );
}

// export default function Blog({ mdxSource, frontMatter }) {
//   const content = hydrate(mdxSource);

//   return (
//     <Page>
//       <Head>
//         <title>{frontMatter.title}</title>
//       </Head>
//       <div>{content}</div>
//     </Page>
//   );
// }

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: post };
}
