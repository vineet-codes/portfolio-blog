import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { getAllFilesFrontMatter } from '@/lib/mdx';

import { Page } from '@/styles/globalStyles';
import styled from 'styled-components';

const Heading1 = styled.h1`
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

const Heading2 = styled.h2`
  font-weight: 600;
  margin: 0;
  padding: 0;

  position: relative;

  &::before {
    content: '${(props) => props.index}';
    position: absolute;
    font-size: 8rem;
    opacity: 0.1;
    top: -70px;
    left: -30px;
    color: lightgray;
    z-index: -10;

    -webkit-text-stroke: 2px black;
    /* -webkit-text-fill-color: white;  */
  }
`;

const SubHeading = styled.p`
  margin-top: 0;
  margin-bottom: 4rem;
`;

const PostContainer = styled.section`
  margin-bottom: 4rem;

  color: ${(props) => props.theme.text};

  a {
    color: ${(props) => props.theme.text};
  }
`;

const Summary = styled.p`
  padding: 0;
  margin: 0;
`;

const Post = ({ post, index }) => {
  return (
    <PostContainer index={index}>
      <Heading2 index={index}>{post.title}</Heading2>
      <Summary>{post.summary}</Summary>
      <Link href={`/blog/${post.slug}`}>
        <a>Read More &#8594;</a>
      </Link>
    </PostContainer>
  );
};

const Posts = ({ posts }) => {
  return (
    <div>
      <Heading1> All published articles</Heading1>
      <SubHeading>
        There are a total of {posts.length} posts in this blog.
      </SubHeading>
      {posts.map((post, index) => (
        <Post post={post} index={index + 1} key={index + 1} />
      ))}
    </div>
  );
};

export default function blog({ posts }) {
  return (
    <Page>
      <Head>
        <title>Blog Index</title>
      </Head>
      {/* {JSON.stringify(posts)} */}
      <Posts posts={posts} />
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
