import styled from "styled-components"

const Container = styled.footer`
  width: 100vw;
  height: 7.7rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  justify-content: space-around;
  align-items: center;
  

  div{
    display: flex;
    gap: 1.2rem;

    >h4{
      color: white;

      display: flex;
      align-items: center;

      font-size: 2.4rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  span{
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1.6rem;
    font-family: 'DM Sans', sans-serif;

  }
`;

export { Container }