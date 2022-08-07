import styled from 'styled-components';

export const MainContainer = styled.section`
  max-width: 96rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 350px;
    margin-bottom: 2rem;
  }
`;

export const LinkContainer = styled.div`
  margin-left: 20rem;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;

  @media (max-width: 800px) {
    margin-left: 2rem;
  }
`;
