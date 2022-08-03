import { Container } from './styles';

export type WineCoverProps = {
  image: string;
  name: string;
};

export default function WineCover({ image, name }: WineCoverProps) {
  return <Container src={image} alt={name} />;
}
