import styled from 'styled-components';

const Container = styled.div`
  width: 37.5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  height: 100vh;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export { Container }