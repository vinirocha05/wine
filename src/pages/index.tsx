import { GetStaticProps } from 'next';
import { getAllWines } from '../data/get-all-wines';
import { Wine } from '../domain/wine';
import Home from '../containers/Home';
import { Provider } from 'react-redux';
import store from '../store';

export type WineProps = {
  wines: Wine[];
};

export default function App({ wines }: WineProps) {
  return (
    <Provider store={store}>
      <Home wines={wines} />
    </Provider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const wines = await getAllWines();

  return {
    props: { wines },
  };
};
