import { Container, Content, Icons } from './styles';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src="/images/wine.svg" alt="logo wine" />
        <ul>
          <li>Clube</li>
          <li>Loja</li>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>

        <Icons>
          <FaRegUserCircle />
          <FaSearch />
          <img
            src="/images/header-wine.svg"
            alt="wine carrinho"
          />
        </Icons>
      </Content>
    </Container>
  );
}
