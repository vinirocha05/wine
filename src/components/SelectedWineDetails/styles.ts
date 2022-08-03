import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  margin-top: 2rem;
`;

export const Tracking = styled.div`
  font-size: ${({ theme }) => theme.fonts.sizes.medium};
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

export const Button = styled.button`
  ${({ theme }) => theme.colors.green};
`;
