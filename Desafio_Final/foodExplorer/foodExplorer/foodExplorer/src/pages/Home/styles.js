import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  /* width: 38.4rem; */
  width: 37.5rem;
  /* width: 37.5rem; */

  

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  .imgAndTitle{   
    width: 100vw;
    /* width: 33.5rem; */
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
      color: ${({ theme }) => theme.COLORS.WHITE};
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
      color: ${({ theme }) => theme.COLORS.WHITE};
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
    /* margin: 37.5rem; */
    
  }

  main section{
    /* width: 37.5rem; */
    margin-bottom: 2rem;
    /* margin-top: 2rem; */
  }

  ul{
    display: flex;
    gap: 2.7rem;
    justify-content: space-around;
    overflow-y: auto;

    margin: 0 auto;
    width: 34.5rem;
    /* background-color: red; */
  }

  ul .arrowDishesLeft{
    position: absolute;
    /* top:35rem; */
    /* bottom: 13rem; */
    top:42rem;
    right: 30rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 4rem;
    }
  }

  ul .arrowDessertsLeft{
    position: absolute;
    /* top:35rem; */
    top:82rem;
    right: 30rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 4rem;
    }
  }

  ul .arrowDrinksLeft{
    position: absolute;
    /* top:35rem; */
    top:127rem;
    right: 30rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 4rem;
    }
  }

  ul .arrowDishesRight{
    position: absolute;
    /* top:35rem; */
    top:42rem;
    right:0.2rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 4rem;
    }
  }
  ul .arrowDessertsRight{
    position: absolute;
    /* top:35rem; */
    top:82rem;
    right: 0.2rem;
    background-color: transparent;
    svg{
      /* color: ${({ theme }) => theme.COLORS.WHITE}; */
      font-size: 4rem;
    }
  }

  ul .arrowDrinksRight{
    position: absolute;
    /* top:35rem; */
    top:127rem;
    right: 0.2rem;
    background-color: transparent;
    svg{
      /* color: red; */
      /* color: ${({ theme }) => theme.COLORS.WHITE}; */
      font-size: 4rem;
    }
  }
  ul li{
    list-style: none;
    justify-content: space-around;
  }
  
  


  ul li .card{
    width: 15rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    /* background-color: violet; */

    margin-top: 1.5rem;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap:0.8rem;

    >h2{
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE_HOME};
    }

    >span{
      font-size: 1.4rem;
    }

    >p{
      color: ${({ theme }) => theme.COLORS.WHITE_HOME};

    }

   
    position: relative;
  }

  ul li img{
    width: 12.6rem;
    height: 12.6rem;

    margin-top: 1rem;
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

  main section ul::-webkit-scrollbar{
        /* display: none; */
  }

  

  /* .showDish{
    display: flex;
    gap: 2.7rem;

  } */
  @media (min-width: 412px){
    ul .arrowDishesLeft{
    top:42rem;
    right: 33.5rem;   
  }

  ul .arrowDessertsLeft{
    top:82rem;
    right: 33.5rem;
  }

  ul .arrowDrinksLeft{
    top:127rem;
    right: 33.5rem;
  } 

  ul .arrowDishesRight{   
    top:42rem;
    right:1rem;    
  }
  ul .arrowDessertsRight{  
    top:82rem;
    right: 1rem;
  }

  ul .arrowDrinksRight{
    
    top:127rem;
    right: 1rem;
    
  }

  }


  @media (min-width: 1024px) {
    width: 100%;
    
    
      .imgAndTitle{
        flex-direction: row;
        /* width: 112rem; */
        width: 92rem;
        height: 26rem;
        margin-top: 16.4rem;
        margin-bottom: 6.2rem;
        margin-left: auto;
        margin-right: auto;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
       
       
      }

      .titles{      
        display: flex;
        flex-direction: row;
               
        .subtitles{
          display: flex;
          flex-direction: column;       
          align-items: flex-start;         
          
          width: 48rem;

          h3{
            font-size: 4rem;
            color: ${({ theme }) => theme.COLORS.WHITE_HOME};
            font-weight: 500;
          }

          h4{
            color: ${({ theme }) => theme.COLORS.WHITE_HOME};
            font-weight: 400;
          }
        }
      }

      .titles img{
          width: 43rem;
          height: 40rem;
          margin-top: -15rem;
          margin-left: -4rem;
          
        }

      .show{
        display: none;
      }

      .hide{
        display: block;
      }



      main section{
        min-width:92rem;
        margin-bottom: 4rem;

        /* background-color: red; */

      }

      main section h2{
        justify-content: left;
      }

      main section ul{
        gap: 2.7rem;
        overflow-y: auto;
        width: 85rem;
      }

      main section ul::-webkit-scrollbar{
        /* display: none; */
      }


      main section ul li .card{
        min-width: 30rem;
        
        >h2{
          font-size: 2.4rem;
          font-family: 'Poppins', sans-serif;
        }

        >p{
          font-size: 1.4rem;
          font-family: 'Roboto', sans-serif;
          width: 22rem;
        }

        >span{
          font-size: 3.2rem;
          font-family: 'Roboto', sans-serif;
          margin: 1.6rem 0;
          
        }
      }

      main section ul li .card .unitsAndInsert{
        margin-bottom: 3.6rem;
        gap: 1.7rem;
      }

      ul li div.unitsAndInsert span{
        font-size: 3rem;
      }

      ul li div.unitsAndInsert:last-child button{
        font-size: 2rem;
      }

      ul li div.unitsAndInsert button:nth-child(-n+3){
        font-size: 3rem;
      }


      main section ul li .card .favorite{
        >button svg{
          font-size: 2.8rem;
        }
      }

      
      ul .arrowDishesLeft{
    position: absolute;
    
    top: 85rem;
    left: 5rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 6rem;
    }
  }

  ul .arrowDessertsLeft{
    position: absolute;
    
    top: 145rem;
    left: 5rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 6rem;
    }
  }

  ul .arrowDrinksLeft{
    position: absolute;
    
    top: 205rem;
    left: 5rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 6rem;
    }
  }

  ul .arrowDishesRight{
    position: absolute;
    
    top: 85rem;
    right: 5rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 6rem;
    }
  }
  ul .arrowDessertsRight{
    position: absolute;
    
    top: 145rem;
    right: 5rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 6rem;
    }
  }

  ul .arrowDrinksRight{
    position: absolute;
    
    top: 205rem;
    right: 5rem;
    background-color: transparent;
    svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 6rem;
    }
  }
      
      
      
    }
`;



export { Container }