import { Container } from './styles';

function Quantity({ add, remove, quantity, id, rest }) {
  return (
    <Container {...rest}>
      <button type="button" onClick={add}>
        +
      </button>
      <span>
        {quantity}
        {id}
      </span>
      <button type="button" onClick={remove}>
        -
      </button>
    </Container>
  );
}

export { Quantity };
