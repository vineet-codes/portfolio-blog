import Link from 'next/link';
import styled from 'styled-components';

// https://github.com/Arcath/arcath.net-next/blob/main/lib/components/mdx.tsx

import Code from './MDXComponents';

const Container = styled.div``;

export const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <Container>
      <Link as={as} href={href} className='custom-link'>
        <a {...otherProps} />
      </Link>
    </Container>
  );
};

export const components = {};
