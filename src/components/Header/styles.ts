import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  height: 10rem;
  border-bottom: 1px solid black;
  margin-bottom: 5rem;
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
    transition: all ease-in-out 200ms;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.colors.pink};
    }
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Icons = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: center;
  width: 25rem;
  justify-content: space-between;
`;
