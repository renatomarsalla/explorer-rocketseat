import styled from 'styled-components'

const Container = styled.section`
  width: 38.4rem;
  height: 38rem;

  margin: 0 auto;

  background-color: red;

  >h2{
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    color:${({ theme }) => theme.COLORS.WHITE_HOME};

    display: flex;
    justify-content: space-around;
  }
`;

export { Container }