import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

const NewsLetterCard = styled.div`
  padding: 1em;
  margin: 0 auto;
  /* position: relative;
  display: flex;
  justify-content: center;
  align-items: center; */

  h1 {
    margin-bottom: 0;
    font-weight: 500;
    line-height: 1;
  }

  p {
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 1.5em;
  }
`;

const Form = styled.form`
  margin: 0 auto;

  .email-label {
    opacity: 0.8;
    display: block;
    margin-bottom: 0;
  }

  .email-input {
    border: 1px solid ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    padding: 0.25em 0.5em;
    display: block;
    width: 90%;
    /* border-radius: 5px; */
    /* width: 100%; */
  }

  .email-input:focus {
    border: 1px solid tomato;
  }

  .message {
    margin-top: 0.5em;
    opacity: 0.8;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 750px) {
    .email-input {
      margin-top: 0;
    }
  }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid tomato;
  color: ${(props) => props.theme.text};
  margin: 0.5em 0em;
  padding: 0.25em 1em;
  cursor: pointer;

  ${(props) =>
    props.primary &&
    css`
      background: tomato;
      color: white;
    `}
`;

const Newsletter = () => {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <NewsLetterCard>
      <h1>Subscribe to my newsletter</h1>
      <p> Where i share my take on disrutive technologies.</p>
      <Form onSubmit={subscribe}>
        <label className='email-label' htmlFor='email-input'>
          {'Email Address'}
        </label>
        <input
          id='email-input'
          className='email-input'
          name='email'
          placeholder='your@email.com'
          ref={inputEl}
          required
          type='email'
        />
        <Button type='submit' primary>
          {'✨ Subscribe 💌'}
        </Button>
        <p className='message'>
          {message
            ? message
            : `I'll only send emails when new content is posted. No spam.`}
        </p>
      </Form>
    </NewsLetterCard>
  );
};

export default Newsletter;
