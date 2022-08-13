import { Container, Content, Icons, NavMobile } from './styles';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <Container data-testid="header">
      <Content>
        <img data-testid="img" src="/images/wine.svg" alt="logo wine" />
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
          <img src="/images/header-wine.svg" alt="wine carrinho" />
        </Icons>
        {open ? '' : <span onClick={() => setOpen(!open)}>☰</span>}
      </Content>
      <NavMobile open={open}>
        <span onClick={() => setOpen(!open)}>&#x274c;</span>

        <ul>
          <li>Clube</li>
          <li>Loja</li>
          <li>Produtores</li>
          <li>Ofertas</li>
          <li>Eventos</li>
        </ul>
      </NavMobile>
    </Container>
  );
}
