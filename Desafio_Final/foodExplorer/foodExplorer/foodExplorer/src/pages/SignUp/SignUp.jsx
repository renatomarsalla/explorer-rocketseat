import { Container, Form } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/Buttontext';

function SignUp() {
  return (
    <Container>
      <div className="title">
        <svg
          width="44"
          height="48"
          viewBox="0 0 44 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z"
            fill="#065E7C"
          />
        </svg>
        <h1>food explorer</h1>
      </div>

      <Form>
        <fieldset>
          <h2>Crie sua conta</h2>

          <div className="name">
            <legend>Seu nome</legend>
            <Input type="text" placeholder="Exemplo: Maria da Silva" required />
          </div>

          <div className="email">
            <legend>Email</legend>
            <Input
              type="mail"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              required
            />
          </div>

          <div className="password">
            <legend>Senha</legend>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              minlength="6"
              required
            />
          </div>

          <Button text="Criar conta" />

          <ButtonText text="Já tenho uma conta" />
        </fieldset>
      </Form>
    </Container>
  );
}

export { SignUp };