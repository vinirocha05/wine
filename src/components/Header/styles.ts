import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  height: 10rem;
  border-bottom: 1px solid black;
`;

export const Content = styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }

  ul li {
    margin-left: 2rem;
  }
`;

export const Icons = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: center;
  width: 25rem;
  justify-content: space-between;
`;
