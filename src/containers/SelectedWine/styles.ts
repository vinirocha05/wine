import styled from 'styled-components';

export const MainContainer = styled.section`
  max-width: 96rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;

export const DetailsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 2rem;
`;
export const LinkContainer = styled.div`
  margin-left: 20rem;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;
