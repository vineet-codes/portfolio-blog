import React from 'react';
import Newsletter from '@/components/Newsletter';
import { Page } from '@/styles/globalStyles';

import styled from 'styled-components';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
`;

const newsletter = () => {
  return (
    <Center>
      <Newsletter />
    </Center>
  );
};

export default newsletter;
