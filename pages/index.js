import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import { Page } from '@/styles/globalStyles';

const Bio = styled.div`
  width: 100%;
  text-align: center;
  padding: 1em 0;

  .bio-text {
    font-weight: 400;
  }

  .bio-image-wrapper {
    border-radius: 5px;
    background-position: center center;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.2);

    display: flex;
    gap: 0.5em;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .highlighter {
    color: tomato;
  }

  @media screen and (min-width: 750px) {
    margin-top: 22vh;
  }
`;

const AboutMePhoto = () => (
  <div className='bio-image-wrapper'>
    <Image
      src='/images/1.jpeg'
      alt='Photo of vineet who is the author of this site.'
      height={150}
      width={112.5}
      className='bio-image'
    />
    <Image
      src='/images/2.jpeg'
      alt='Photo of vineet who is the author of this site.'
      height={150}
      width={112.5}
      className='bio-image'
    />
    <Image
      src='/images/3.jpeg'
      alt='Photo of vineet who is the author of this site.'
      height={150}
      width={112.5}
      className='bio-image'
    />
    <Image
      src='/images/4.jpeg'
      alt='Photo of vineet who is the author of this site.'
      height={150}
      width={112.5}
      className='bio-image'
    />
  </div>
);

const BioDescription = () => {
  return (
    <p className='bio-description'>
      Hi, I am Vineet Kumar Singh and this is my personal space on the world
      wide web. I write here to think better and learn effectively. I am
      passionate about <i>Computing, Economics, and Physics</i>. Currently, I
      work as{' '}
      <span className='highlighter'>
        vice president of global product development in Payment & Recievables
        team at TTS <em>(part of Citigroup)</em>{' '}
      </span>{' '}
      based out of Dublin, Ireland .
    </p>
  );
};

const Index = () => {
  return (
    <Page>
      <Head>
        <title>Vineet's home on internet</title>
      </Head>
      <Bio>
        <h1 className='bio-text'>Welcome to my homepage</h1>
        <AboutMePhoto />
        <BioDescription />
      </Bio>
    </Page>
  );
};

export default Index;
