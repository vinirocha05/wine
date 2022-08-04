import styled from 'styled-components';

export const Card = styled.div`
  border: 2px 2px 2px 2px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 2rem;
  background-color: #fff;
  transition: all ease-in-out 400ms;
  height: 100%;
  img {
    width: 100%;
  }

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  :hover {
    transform: scale(1.04);
  }
`;

export const PriceContainer = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  margin-right: ${({ theme }) => theme.spacings.small};
  margin-bottom: ${({ theme }) => theme.spacings.small};
  span {
    background-color: #f79552;
    color: #fff;
    padding: 0.6rem;
    border-radius: 0.5rem;
    margin-left: 1rem;
  }
`;

export const Price = styled.p`
  display: inline-block;
  text-decoration: line-through;
`;

export const PriceMember = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-align: center;
  span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const NonMember = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.small};
  text-align: center;
  color: #888888;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  padding: ${({ theme }) => theme.fonts.sizes.small};
  border-radius: 1rem;
  border: none;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.medium};
  transition: all ease-in-out 400ms;
  :hover {
    transform: scale(1.04);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
