import { SET_FILTER } from './types';

export function setFilter(filter: string) {
  return {
    type: SET_FILTER,
    filter,
  };
}
