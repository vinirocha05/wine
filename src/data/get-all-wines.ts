import { API_URL } from '../config/config';
import { Wine, WineData } from '../domain/wine';
import { fetchJson } from '../utils/fetch-json';

export const getAllWines = async (query = ''): Promise<Wine[]> => {
  const urlQuery = `${API_URL}${query}`;
  const wines = await fetchJson<WineData>(urlQuery);
  return wines.items;
};
