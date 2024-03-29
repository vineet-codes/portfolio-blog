import Link from 'next/link';
import styled from 'styled-components';

import Image from 'next/image';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

export const Blockquote = styled.blockquote`
  background: rgb(255, 0, 114);
  p {
    color: ${(props) => props.theme.text};
    font-size: 0.91rem;
    font-style: italic;
    line-height: 1.48;
    padding: 0.5em 1em;

    @media screen and (min-width: 770px) {
      font-size: 1.1rem;
    }
  }
`;

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  font-size: 0.8rem;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

export const Code = ({ className, children }) => {
  const language = className.replace(/language-/, '');
  console.log('reacher her');
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children.trim()}
      language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

const MDXComponents = {
  Image,
  blockquote: Blockquote,
  code: Code,
};

export default MDXComponents;
