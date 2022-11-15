import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 10.4rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  /* .container{
    display: flex;
    align-items: center;
  } */

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
    .hide{
      display: block;
    }

    .show{
      display: none;
    }

    .title{
      display: flex;
      flex-direction: row;
      justify-content: center;

      >svg{
        margin-left: 6rem;
        /* margin-left: 12.3rem; */
      }

      >h3{
        width: 15rem;//minimo
        height: 2.9rem;
        /* margin-right: 3.7rem; */

        font-size: 2.4rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
      }

      
    }

    .btnFavorites{
      /* width: 27rem;*/
      width: 70rem;

      font-size: 1.6rem;
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      line-height: 2.56rem;
      
    }

    button{
      width: 50rem;
      /* padding: 0 3.6rem; */
      margin-left: 3.7rem;
    }

    

   .logout{
    margin-right: 6rem;
    /* margin-right: 12.8rem; */
   }


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