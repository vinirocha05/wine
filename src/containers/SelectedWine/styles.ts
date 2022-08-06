import styled from 'styled-components';

export const MainContainer = styled.section`
  max-width: 96rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
`;

export const LinkContainer = styled.div`
  margin-left: 20rem;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  padding: ${({ theme }) => theme.fonts.sizes.small};
  border-radius: 1rem;
  border: none;
  max-width: 20rem;
  margin-top: ${({ theme }) => theme.spacings.medium};
  cursor: pointer;
  transition: all ease-in-out 400ms;
  :hover {
    transform: scale(1.04);
  }
`;
