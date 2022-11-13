import styled from "styled-components";

const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.WHITE};

  height: 4.8rem;
  border:0;
  padding: 1.2rem;
  border-radius: 1rem;
  font-weight: 500;

  /* &:disabled{
    opacity: 0.5;
  } */
`;

export { Container }