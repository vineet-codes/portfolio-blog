import React from 'react';
import styled from 'styled-components';
import { Image } from 'next/image';
import Link from 'next/link';

const PodcastContainer = styled.div`
  text-align: center;

  h1 {
    font-weight: 500;
  }

  .podcast-hosts {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
  }

  .podcast-headshot {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border: 1px solid ${(props) => props.theme.brand.c1};
    border-radius: 50%;
  }

  /* .podcast-host-dd {
    width: 80px;
    height: 80px;
    object-fit: cover;
  } */

  .coming-soon p {
    display: inline-block;
    padding: 0.4em 0.8em;
    border: 1px solid ${(props) => props.theme.brand.c1};

    a {
      color: ${(props) => props.theme.brand.c1};
      text-decoration: none;
      border-bottom: 1px solid ${(props) => props.theme.brand.c1};
    }
  }

  @media screen and (min-width: 750px) {
    .podcast-hosts {
      justify-content: center;
    }

    .podcast-host {
      margin-left: 40px;
    }
  }
`;

const Podcast = () => {
  return (
    <PodcastContainer>
      <h1>Cut d Crap</h1>
      <p>
        A podcast show where friends and experts sit down to talk technology and
        its implications.
      </p>
      <div className='podcast-hosts'>
        <div className='podcast-host'>
          <img
            src='/images/podcast/vineet-podcast.jpg'
            alt='vineet images'
            className='podcast-headshot'
          />
          <p>Vineet Singh</p>
        </div>
        <div className='podcast-host'>
          <img
            src='/images/podcast/dd-podcast.jpeg'
            alt='vineet image'
            className='podcast-headshot'
          />
          <p>Deshdeep Saxena</p>
        </div>
      </div>
      <div className='coming-soon'>
        <p>Coming Soon</p>
      </div>
    </PodcastContainer>
  );
};

export default Podcast;
