import { Wine } from './wine';

export type Order = Wine & {
  quantity: number;
};
