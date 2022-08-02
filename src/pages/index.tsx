import { GetStaticProps } from 'next';
import { getAllWines } from '../data/get-all-wines';
import { Wine } from '../domain/wine';
import Home from '../containers/Home';

export type WineProps = {
  wines: Wine[];
};

export default function App({ wines }: WineProps) {
  return <Home wines={wines} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const wines = await getAllWines();
  return {
    props: { wines }, // will be passed to the page component as props
  };
};
