import Header from '../../components/Header';
import WineCard from '../../components/WineCard';
import { Wine } from '../../domain/wine';
import {
  Container,
  CardsContainer,
  ErrorMessage,
  ContentContainer,
  FiltersContainer,
  Pages,
} from './styles';
import { useState } from 'react';
import { filterWines } from '../../data/filter-wines';

export type HomeProps = {
  wines: Wine[];
};

export default function Home({ wines }: HomeProps) {
  //Creatign hooks
  const [filter, setFilter] = useState('');

  const [page, setPage] = useState(1);

  //filtering wines
  const filteredWine = filterWines(wines, filter);

  console.log(filteredWine);

  // creating pagination logic
  const totalItems = filteredWine.length;
  const cardsPerPage = 6;

  const winesPagination = [];

  for (
    let i = (page - 1) * cardsPerPage;
    i < (cardsPerPage * page > totalItems ? totalItems : cardsPerPage * page);
    i++
  ) {
    winesPagination.push(filteredWine[i]);
  }
  console.log(winesPagination);

  //creating pages
  const pages = [];

  for (let i = 0; i < Math.ceil(totalItems / cardsPerPage); i++) {
    pages.push(i + 1);
  }

  return (
    <>
      <Header />
      <Container>
        <FiltersContainer>
          <h2>Refine sua busca</h2>
          <br />
          <p>
            <strong>Por preço</strong>
          </p>
          <br />
          <label htmlFor="">
            <input type="radio" name="filter" onChange={() => setFilter('')} />
            Todos os preços
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="filter"
              onChange={() => setFilter('40_0')}
            />
            Até R$40,00
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="filter"
              onChange={() => setFilter('60_40')}
            />
            R$40 A R$60
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="filter"
              onChange={() => setFilter('200_100')}
            />
            R$100 A R$200
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="filter"
              onChange={() => setFilter('500_200')}
            />
            R$200 A R$500
          </label>
          <label htmlFor="">
            <input
              type="radio"
              name="filter"
              onChange={() => setFilter('10000_500')}
            />
            Acima de R$500
          </label>
        </FiltersContainer>
        <ContentContainer>
          <p>
            <strong>{totalItems}</strong> produtos encontrados
          </p>
          <CardsContainer>
            {filteredWine.length > 0 ? (
              winesPagination.map((wine) => (
                <WineCard wine={wine} key={wine.id} />
              ))
            ) : (
              <ErrorMessage>
                Ops.. Não encontramos nenhum produtos : {'('}
              </ErrorMessage>
            )}
          </CardsContainer>
        </ContentContainer>
      </Container>
      <Pages>
        {pages.map((e) => (
          <span key={e} onClick={() => setPage(e)}>
            {e}
          </span>
        ))}
      </Pages>
    </>
  );
}
