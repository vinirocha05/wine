import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-top: 2rem;
`;

export const Tracking = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};

  span {
    color: ${({ theme }) => theme.colors.pink};
  }
`;
export const Heading = styled.h2`
  margin-top: 1rem;

  font-size: ${({ theme }) => theme.fonts.sizes.superLarge};
`;
export const Infos = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};

  width: 100%;
  p {
    display: inline;
    margin-left: 2rem;
  }
  img {
    max-width: 2rem;
  }
`;
export const MemberPrice = styled.p`
  color: ${({ theme }) => theme.colors.pink};
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fonts.sizes.superLarge};
`;
export const NonMemberPrice = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.large};
`;
export const SommelierComments = styled.div`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fonts.sizes.large};
  p {
    color: #666666;
    margin-top: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  padding: ${({ theme }) => theme.fonts.sizes.small};
  border-radius: 1rem;
  border: none;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
  align-items: center;

  button {
    border: none;
    padding: 1rem;
    border-radius: 50rem;
    text-align: center;
    margin: 0 ${({ theme }) => theme.spacings.medium};
    background-color: ${({ theme }) => theme.colors.green};
    color: #eee;
    border: 1px solid #eee;
    cursor: pointer;
  }

  p {
    text-align: center;
    color: #eee;
    cursor: pointer;
  }
`;

export const ButtonController = styled.div`
  border-right: 1px solid #eee;
`;
