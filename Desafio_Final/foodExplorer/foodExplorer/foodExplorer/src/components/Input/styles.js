
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  color: ${({ theme }) => theme.COLORS.GREY_200};

  margin-bottom: 0.8rem;
  border-radius: 1rem;

  >input{
    height: 5.6rem;
    width: 100%;
    padding: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: 1px solid;

    border-radius: 1rem;

    

    &::placeholder{
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-size: 1.6rem;
      font-weight: 500;

      font-family: 'Roboto', sans-serif;
    }

    
  }

  >svg{
      margin-left: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;