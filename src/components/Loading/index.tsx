import ReactLoading from 'react-loading';
import { theme } from '../../styles/theme';

export default function Loading() {
  return (
    <ReactLoading
      type="spinningBubbles"
      color={theme.colors.pink}
      height={667}
      width={375}
    />
  );
}
