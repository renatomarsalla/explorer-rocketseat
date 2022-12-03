import styled from 'styled-components';

const Container = styled.div`
  width: 37.5rem;
  height: 100vh;

  .page{
    margin: 0 auto;
    width: 34.5rem;

    >.return{

      button{
        background-color: transparent;
        display: flex;
        align-items: center;

        margin-top: 2.4rem;

        svg{
          font-size: 2rem;
          gap: 1.1rem;
        }
      }
    }

    main{
      height: 100vh;
      >.dish{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        img{
          width: 15rem;
          height: 15rem;

          margin-top: 1rem;
        }

        
      }

      .infos{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          margin-top: 1rem;
          h1{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 500;
            font-family: "Poppins", sans-serif;
            font-size: 2rem;
          }
          span{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-weight: 400;
            width: 20rem;
            text-align: center;
            font-size: 1.4rem;
          }
        }

      .ingredients{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: center;

        margin-top: 2rem;

        >.ingredient{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;

          label{
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
          }
        }

        >.ingredient img{
          width: 5rem;
          height: 5rem;
          /* margin-top: 1rem; */
        }
      }

      .priceAndUnits, .units{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      }

      .priceAndUnits{
        margin-top: 2rem;

        >span{
          color: ${({ theme }) => theme.COLORS.PRICE};
          font-size: 1.6rem;
          font-family: 'Roboto', sans-serif;
        }
      }

      .units{
        gap: 1rem;

        span{
          font-size: 1.6rem;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      .units button:nth-child(4){
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        align-items: center;
        margin-left: 1rem;
      }

      
    }

    
  }

  @media (min-width: 412px) {
      margin: 0 auto;
      width: 100%;
      height: 100vh;
    
      
    }
`;

export { Container }