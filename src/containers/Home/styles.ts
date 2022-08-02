import styled from 'styled-components';

export const Container = styled.section`
  max-width: 96rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(256px, 1fr)
  );
  gap: 5rem;
`;
