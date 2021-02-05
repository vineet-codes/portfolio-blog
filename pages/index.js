import Head from 'next/head';
import styled from 'styled-components';

import Image from 'next/image';

import { Page } from '@/styles/globalStyles';

const LandingPage = styled.div``;

const SubHeading = styled.h2`
  font-weight: 600;
`;

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Vineets home on internet</title>
      </Head>
      <LandingPage></LandingPage>
    </Page>
  );
}
