import { Wine } from '../../domain/wine';

export type HomeProps = {
  wines: Wine[];
};

export default function Home({ wines }: HomeProps) {
  return (
    <h2>
      {wines.map((wine) => (
        <h2 key={wine.id}>{wine.name}</h2>
      ))}
    </h2>
  );
}
