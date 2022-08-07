import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 2rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 96rem;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  margin-bottom: 3rem;
`;

export const CardsContainer = styled.div`
  max-width: 100%;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 5rem;
`;

export const ErrorMessage = styled.p`
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
`;
