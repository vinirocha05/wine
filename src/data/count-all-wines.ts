import { API_URL } from '../config/config';
import { WineData } from '../domain/wine';
import { fetchJson } from '../utils/fetch-json';

export const countAllWines = async (query = ''): Promise<number> => {
  const urlQuery = `${API_URL}${query}`;
  const wines = await fetchJson<WineData>(urlQuery);
  return wines.totalItems;
};
