import { GetServerSideProps } from 'next';
import SelectedWine from '../../containers/SelectedWine';
import { getAllWines } from '../../data/get-all-wines';
import { Wine } from '../../domain/wine';

export type WineDetailsProps = {
  selectedWine: Wine;
};

export default function WineDetails({ selectedWine }: WineDetailsProps) {
  return <SelectedWine selectedWine={selectedWine} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = Number(ctx.query.id);

  const wines = await getAllWines();

  const selectedWine = wines[id - 1];

  return {
    props: { selectedWine },
  };
};
