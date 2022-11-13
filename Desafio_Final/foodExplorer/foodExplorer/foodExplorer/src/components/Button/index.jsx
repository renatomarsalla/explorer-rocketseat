import { Container } from './styles';

function Button({ text, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {text}
    </Container>
  );
}

export { Button };
