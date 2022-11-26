import styled from 'styled-components';

const Container = styled.button`
    background-color: transparent;
    border: none;

    >svg{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2rem;
    }
`;

export { Container };
