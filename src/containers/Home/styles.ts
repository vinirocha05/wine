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

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  input {
    margin-right: 2rem;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  margin: 2rem auto;
  max-width: 50rem;
  span {
    background-color: #b6116e;
    color: #fff;
    padding: 1rem;
    border: none;
    margin-left: 1rem;
    border-radius: 0.6rem;
    cursor: pointer;
  }
`;
