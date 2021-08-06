import Link from 'next/link';
import styled from 'styled-components';

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
