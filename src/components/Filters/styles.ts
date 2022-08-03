import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  input {
    margin-right: 2rem;
  }
`;
