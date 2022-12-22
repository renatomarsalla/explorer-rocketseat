import styled from 'styled-components';

const Container = styled.div`
  width: 37.5rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  main{
    >.page{
      width: 34.5rem;
      /* height: 100vh; */
      margin: 0 auto;
      /* background-color: red; */

      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      .myOrder{
        /* background-color: blue; */
        width: 100%;

        h3{
          font-size:2rem;
          font-family: 'Poppins', sans-serif;
          color:${({ theme }) => theme.COLORS.WHITE};
          font-weight: 500;
          margin-top: 1.6rem;
        }

        

        ul li{
          display: flex;
          align-items: center;
          gap: 1.3rem;
          margin-top: 1.6rem;
          margin-bottom: 1rem;
          img{
            width: 5rem;
            height: 5rem;
          }

          .nameAndDelete{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 1rem;
            button{
              font-size: 1.4rem;
              color:${({ theme }) => theme.COLORS.BTN_DELETE}
            }
            div{
              display: flex;
              align-items: center;
              gap: 0.8rem;

              p{
                font-size: 1.6rem;
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                color: ${({ theme }) => theme.COLORS.WHITE};
              }
              span{
                font-size: 1.2rem;
                color: ${({ theme }) => theme.COLORS.GRAY_100};
              }
            }
          }
        }

        ul .total{
          margin-top: 2rem;
          span{
            color:${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
          }
          
        }
        
      }

      .payment{
        .options{
          display: flex;
          justify-content: center;
          width: 30rem;
          margin:0 auto;         
          button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
            width: 15rem;
            padding: 2rem 0;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.4rem;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
          }
        }
        .QrCodeOrCredit{
          width: 30rem;
          height: 30rem;
          margin: 0 auto;
          /* background-color: red; */
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;

          span{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            font-family:'Roboto', sans-serif;
            font-size: 2rem;
          }

        }
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