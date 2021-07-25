import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Container } from '@/styles/globalStyles';

import { motion } from 'framer-motion';

const Header = styled(motion.header)`
  /* text-align: center; */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background: ${(props) => props.theme.background};
  /* box-shadow: 0px 2px 12px -2px rgba(0, 0, 0, 0.25); */

  .logo {
    /* padding-top: 0.3em; */
    letter-spacing: 0.1ch;
    /* padding-top: 0em; */
    /* margin: 0.5em 0; */
    margin: 0.2em 0;
    margin-left: 1em;
  }

  .logo > a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 1.5rem;
    color: ${(props) => props.theme.brand.c1};
    border: 1px solid ${(props) => props.theme.brand.c1};
    padding: 0.05em 0.5em;
  }

  nav {
    position: absolute;
    text-align: right;
    top: 100%;
    right: 0;
    background: ${(props) => props.theme.background};

    width: 100%;
    display: none;
  }

  nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  nav li {
    margin-bottom: 1em;
    margin-right: 1em;
  }

  nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 200;
    text-transform: uppercase;
  }

  /* nav a:hover {
    color: rgba(23, 23, 23, 0.5);
  } */

  .nav-toggle {
    display: none;
  }

  .nav-toggle:checked ~ nav {
    display: block;
  }

  .nav-toggle:checked ~ nav {
    transform: scale(1, 1);
  }

  .nav-toggle:checked ~ nav a {
    opacity: 1;
    transition: opacity 250ms ease-in-out 250ms;
  }

  /* nav label */
  /* changed this from the tutorial video to
   allow it to gain focus, making it tabbable */
  .nav-toggle {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }

  .nav-toggle:focus ~ .nav-toggle-label {
    outline: 3px solid rgba(lightblue, 0.75);
  }

  .nav-toggle {
    display: none;
  }

  .nav-toggle-label {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 1em;
    margin-top: 0.3em;

    /* border: 1px solid red; */
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .nav-toggle-label span,
  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    display: block;
    background: #ffffff;
    height: 1px;
    width: 2em;
    border-radius: 2px;
    position: relative;
  }

  .nav-toggle-label span::before,
  .nav-toggle-label span::after {
    content: '';
    position: absolute;
  }

  .nav-toggle-label span::before {
    bottom: 7px;
  }

  .nav-toggle-label span::after {
    top: 7px;
  }

  /* for bigger screens */
  @media screen and (min-width: 770px) {
    display: grid;
    grid-template-columns: 1fr auto minmax(600px, 3fr) 1fr;

    .nav-toggle-label {
      display: none;
    }

    .logo {
      grid-column: 2 / span 1;
    }

    nav {
      /* all: unset; */
      position: relative;
      text-align: left;
      transition: none;
      transform: scale(1, 1);
      top: auto;
      left: auto;
      grid-column: 3 / 4;

      display: flex;
      justify-content: flex-end;
      align-items: center;

      font-weight: 200;
      letter-spacing: 0.3ch;
    }

    nav a {
      opacity: 1;
      position: relative;
    }

    /* nav a:hover {
    color: var(--link-hover-color);
  } */

    nav ul {
      display: flex;
      justify-content: flex-end;
    }

    nav li {
      margin-left: 3em;
      margin-bottom: 0;
      margin-right: 0;
      margin-top: 0.5em;
    }

    nav a::before {
      content: '';
      display: block;
      height: 1px;
      background: #ffffff;
      position: absolute;
      bottom: -0.5em;
      left: 0;
      right: 0;
      transform: scale(0, 1);
      transform-origin: left;
      transition: transform ease-in-out 250ms;
    }

    nav a:hover::before {
      transform: scale(1, 1);
    }
  }
`;

const Nav = () => {
  return (
    <Header
    // animate={{ y: 0, opacity: 1 }}
    // initial={{ y: -72, opacity: 0 }}
    // transition={{
    //   duration: 0.8,
    //   ease: [0.6, 0.05, -0.01, 0.9],
    // }}
    >
      <h1 className='logo'>
        <Link href='/'>
          <a>Vineet</a>
        </Link>
      </h1>
      <input type='checkbox' className='nav-toggle' id='nav-toggle' />
      <nav>
        <ul>
          <li className='nav-list-item'>
            <Link href='/blog'>
              <a>Blog</a>
            </Link>
          </li>
          <li className='nav-list-item'>
            <Link href='/newsletter'>
              <a>Newsletter</a>
            </Link>
          </li>
          {/* <li className='nav-list-item'>
            <Link href='/twitter'>
              <a>Podcast</a>
            </Link>
          </li> */}
        </ul>
      </nav>
      <label htmlFor='nav-toggle' className='nav-toggle-label'>
        <span></span>
      </label>
    </Header>
  );
};

export default Nav;
