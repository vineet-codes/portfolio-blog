import Head from 'next/head';
import React from 'react';

import { getMDXComponent } from 'mdx-bundler/client';
import { getFiles, getSinglePost } from '@/lib/mdx-bundle';
import { Page } from '@/styles/globalStyles';

import styled from 'styled-components';

import { CustomLink } from '@/components/custom-mdx-components';

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

// styles for parsed MDX styling
const Main = styled.main`
  /* width: 65ch; */
  /* margin: 0 auto; */

  a {
    color: ${(props) => props.theme.brand.c1};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

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
    color: ${(props) => props.theme.brand.c1};
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
    text-decoration: none;
  }

  h1 > a :hover {
    text-decoration: underline;
  }

  h2 > a :hover {
    text-decoration: underline;
  }

  P > img {
    width: 100%;
  }
`;

const Content = styled.div`
  line-height: 1.6;
`;

export default function Blog({ code, frontMatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

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
        <Content>
          <Component />
        </Content>
      </Main>
    </Page>
  );
}

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
  const post = await getSinglePost(params.slug);

  return { props: post };
}
