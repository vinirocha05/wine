import { Container, Content, Icons, NavMobile, Search } from './styles';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../store';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [filterName, setFilterName] = useState('');

  const dispatch = useDispatch();

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
          <button onClick={() => dispatch({ type: 'setFilter' })}>Oi</button>
        </ul>

        <Icons>
          <Search>
            {search ? (
              <input
                type="text"
                onChange={(e) => {
                  setFilterName(e.target.value);
                }}
              />
            ) : (
              <FaSearch
                onClick={() => {
                  setSearch(!search);
                }}
              />
            )}
          </Search>

          <FaRegUserCircle />
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
