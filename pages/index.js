import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Page } from '@/styles/globalStyles';

const Bio = styled(motion.div)`
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
    color: ${(props) => props.theme.brand.c1};
  }

  @media screen and (min-width: 750px) {
    margin-top: 20vh;
  }
`;

const AboutMePhoto = () => (
  <motion.div
    className='bio-image-wrapper'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5 }}>
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
  </motion.div>
);

const BioDescription = () => {
  return (
    <motion.p
      className='bio-description'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}>
      Hi, I am Vineet Kumar Singh and this is my personal space on the world
      wide web. I write here to think better and learn effectively. I am
      passionate about and specialize in{' '}
      <i>Computing, Economics, and Physics</i>. Currently, I work as{' '}
      <span className='highlighter'>
        vice president of global product development in Payment & Recievables
        team at TTS <em>(part of Citigroup)</em>{' '}
      </span>{' '}
      based out of Dublin, Ireland .
    </motion.p>
  );
};

const Index = () => {
  return (
    <Page>
      <Head>
        <title>Vineet's home on internet</title>
      </Head>
      <Bio exit={{ opacity: 0 }}>
        <motion.h1
          className='bio-text'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}>
          Welcome to my homepage
        </motion.h1>
        <AboutMePhoto />
        <BioDescription />
      </Bio>
    </Page>
  );
};

export default Index;
