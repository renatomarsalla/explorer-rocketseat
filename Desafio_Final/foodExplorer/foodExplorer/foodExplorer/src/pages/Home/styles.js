import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 38.4rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  .imgAndTitle{   
    width: 100vw;
    height: 13rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    display: flex;
    flex-direction: column;

    margin-bottom: 3.2rem;

    
  }

  .foodExplorer{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;

    h1{
      font-size: 3rem;
      font-family: 'Roboto', sans-serif;
    }

    svg{
      font-size: 4rem;
    }

  }

  .titles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 2rem;
    h3{
      font-size: 2rem;
      font-family: 'Poppins',sans-serif;
    }
    h4{
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  .subtitles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hide{
    display: none;
  }

  main{
    width: 100vw;
  }

  main section{
    margin-bottom: 2rem;
  }

  ul{
    display: flex;
    /* gap: 2.7rem; */
    justify-content: space-around;
  }

  ul li{
    list-style: none;
    
  }


  ul li .card{
    width: 15rem;
    /* height: 50rem; */
    background-color: violet;

    margin-top: 1.5rem;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap:0.8rem;

    >h2{
      font-size: 1.6rem;
    }

    >span{
      font-size: 1.4rem;
    }
  }

  ul li img{
    width: 12.6rem;
    height: 12.6rem;

    /* margin-top: 2.6rem; */
  }

  ul li .card p{
    text-align: center;
    font-size: 1.2rem;
  }

  ul li .card span{
    text-align: center;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PRICE};
    font-family: 'Roboto', sans-serif;
  }

  ul li div.favorite{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    
    margin-top: 0.5rem;
  }


  ul li div.unitsAndInsert{
    display: flex;
    align-items: center;
    gap: .8rem;

    margin-bottom: 1.5rem;
    
    >button{
      height: auto;
      font-size: 1rem;
    }

    >button.decrement,button.increment, span{
      font-size: 2rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

     
  }

  /* .showDish{
    display: flex;
    gap: 2.7rem;

  } */


  @media (min-width: 1024px) {
    width: 100%;
      .imgAndTitle{
        flex-direction: row;
        width: 112rem;
        height: 26rem;
        /* background-color: red; */
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
        margin: 16.4rem auto 6.2rem;
       
       
      }

      .titles{
        flex-direction: row;
        /* gap: 18rem; */
        position: relative;
        
        

        .subtitles{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          /* background-color: blue; */
          position: absolute;
          left: 10rem;
          width: 48rem;
          margin-left: 50rem;

          h3{
            font-size: 4rem;
            color: ${({ theme }) => theme.COLORS.WHITE_HOME};
          }

          h4{
            color: ${({ theme }) => theme.COLORS.WHITE_HOME};
          }
        }
      }

      .titles img{
          width: 63rem;
          height: 40rem;
          position: absolute;         
          bottom: 0rem;
          left: -5rem;
        }

      .show{
        display: none;
      }

      .hide{
        display: block;
      }
      
      
    }
`;



export { Container }