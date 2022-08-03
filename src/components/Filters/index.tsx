import Link from 'next/link';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h2>Refine sua busca</h2>
      <br />
      <Link href="/products/pages/1/">
        <label htmlFor="">
          <input type="radio" name="filter" />
          Até R$40,00
        </label>
      </Link>

      <Link href="/60">
        <label htmlFor="">
          <input type="radio" name="filter" />
          R$40 A R$60
        </label>
      </Link>
      <Link href="/100">
        <label htmlFor="">
          <input type="radio" name="filter" />
          R$100 A R$200
        </label>
      </Link>
      <Link href="/200">
        <label htmlFor="">
          <input type="radio" name="filter" />
          R$200 A R$500
        </label>
      </Link>
      <Link href="/500">
        <label htmlFor="">
          <input type="radio" name="filter" />
          Acima de R$500
        </label>
      </Link>
    </Container>
  );
}
