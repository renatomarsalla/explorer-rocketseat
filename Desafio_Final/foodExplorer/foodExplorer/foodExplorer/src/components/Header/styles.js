import styled from "styled-components";

const btnFavorite = document.querySelector('.btnFavorite');

const Container = styled.div`
  width: 100vw;
  height: 10.4rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  .title{
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};  
  }

  .hide{
    display: none;
  }

  .show{
    display: block;
  }

  @media (min-width: 1024px) {
    
  }

`;

const Favorites = styled.button`
  border: none;
  background: none;

  >svg{
    color: gray;
    font-size: 3rem;
    margin: 0 2rem;
  }
`;

const Buy = styled.button`
  border: none;
  background: none;

  >svg{
    color: gray;
    font-size: 3rem;
    margin: 0 2rem;
  }
`;

const Logout = styled.button`
  border: none;
  background: none;

  >svg{
    color: gray;
    font-size: 3rem;
    margin: 0 2rem;
  }
`;

export { Container, Favorites, Buy, Logout };