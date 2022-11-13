import styled from "styled-components";

const Container = styled.div`
  width: 38.4rem;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >.title{
    display: flex;
    gap: 1.9rem;
    align-items: center;

    h1{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-family: 'Roboto', sans-serif;
      font-size: 4.2rem;
    
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    gap: 30rem;
    
    >.title h1{
      width: 25rem;
    }
  }
`;

const Form = styled.form`
  width: 38.4rem;
  margin: 0 auto;
  height: 60rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-radius: 1rem;

  margin-top: 6.4rem;

  fieldset{
    width: 34.8rem;
    margin: 0 auto;
    border: 0;
  }

  h2{
    margin-top: 6.4rem;
    margin-bottom: 3.2rem;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
  }

  legend{
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  button{
    width: 100%;
    margin-top: 1.6rem;
  }

  .name, .email, .password{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .email, .password{
    margin-top: 1.6rem;
  }

  @media (min-width: 1024px) {
    min-width: 47.6rem;
  }
`;

export { Container, Form }