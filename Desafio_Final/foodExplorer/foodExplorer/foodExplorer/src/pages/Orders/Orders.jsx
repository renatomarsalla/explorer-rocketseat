import { Container } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

function Order() {
  return (
    <Container>
      <Header />
      <div className="page">
        <h1>Pedidos</h1>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th>Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              <td>Pendente</td>
              <td>000004</td>
              <td>1 x Salada Ravanello</td>
              <td>10/12/2022</td>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export { Order };
