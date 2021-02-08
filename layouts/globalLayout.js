import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

import { useGlobalStateContext } from '@/contexts/globalContext';
import Nav from '@/components/Nav';

const GlobalStyle = createGlobalStyle`
${normalize}

*, *::before, *::after {
  box-sizing: border-box;
}

/* Code for Firefox */
::-moz-selection {
  /* Code for Firefox */
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
}

::selection {
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.background};
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
  line-height: 1.5;
  scroll-behavior: smooth;
  ${'' /* letter-spacing: 0.1ch; */}
}

body {
  margin: 0;
  padding: 0;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  overscroll-behavior: none;
  overflow-x: hidden;
  font-weight: 300;
}

#__next {
  width: 80vw;
  max-width: 750px;
  margin: 0 auto;
  ${'' /* height: 100vh; */}
  /* to accomodate fixed nav situtation that we have */
  margin-top: 3.5em;
}

h1,
h2,
strong {
  scroll-margin-top: 6rem;
}
`;

const GlobalLayout = ({ children }) => {
  const { currentTheme } = useGlobalStateContext();
  const darkTheme = {
    background: '#171717',
    text: '#f1f1f1',
  };

  const lightTheme = {
    background: '#ffffff',
    text: '#171717',
  };

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Nav />
      {children}
    </ThemeProvider>
  );
};

export default GlobalLayout;
