import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 30rem;
  a {
    background-color: #b6116e;
    color: #fff;
    padding: 1rem;
    border: none;
    margin-left: 1rem;
    border-radius: 0.6rem;
    text-decoration: none;
  }

  @media (max-width: 800px) {
    a:nth-child(n + 4) {
      display: none;
    }
  }
`;
