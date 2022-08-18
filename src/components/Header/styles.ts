import styled from 'styled-components';
export type NavMobileProps = {
  open: boolean;
};

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
  span {
    display: none;
  }
  @media (max-width: 800px) {
    ul {
      display: none;
    }
    span {
      display: block;
      padding-right: 2rem;
    }
  }
`;

export const Icons = styled.div`
  font-size: 4rem;
  display: flex;
  align-items: center;
  width: 25rem;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const NavMobile = styled.nav<NavMobileProps>`
  display: ${({ open }) => (open ? '' : 'none')};
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #dedede;
  color: black;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  overflow-y: hidden;
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ul li {
    padding: 5rem 0;
  }

  span {
    position: absolute;
    right: 0;
    padding: 2rem;
    font-size: ${({ theme }) => theme.fonts.sizes.small};
  }
`;

export const Search = styled.div``;
