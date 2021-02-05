import Link from 'next/link';
import styled from 'styled-components';

import Image from 'next/image';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const Blockquote = styled.blockquote`
  p {
    color: ${(props) => props.theme.text};
    font-size: 1.2rem;
    font-style: italic;
    background: tomato;
    line-height: 1.48;
    padding: 0.5em 1em;
    @media screen and (min-width: 770px) {
      font-size: 1.2rem;
    }
  }
`;

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

// const Code = (props) => {
//   const codeElementProps = props.children[0].props;
//   console.log(props.children);
//   const languageHighlightClassName = codeElementProps.props.className;

//   return (
//     <SyntaxHighlighter
//       language={props.language}
//       style={{ overflow: 'scroll' }}
//       useInlineStyles={false}>
//       <code className={languageHighlightClassName}>
//         {codeElementProps.children}
//       </code>
//     </SyntaxHighlighter>
//   );
// };

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
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

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}>
      {/* {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )} */}
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
  a: CustomLink,
  code: Code,
};

export default MDXComponents;

// const components = {
//     a: Link,
//     blockquote: Blockquote,
//     em: Em,
//     h1: H1,
//     h2: H2,
//     h3: H3,
//     img: Img,
//     li: Li,
//     ol: Ol,
//     pre: Code,
//     strong: Strong,
//     ul: Ul
// };
