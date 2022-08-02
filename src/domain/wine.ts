export type WineData = {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  items: Wine[];
};

export type Wine = {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
  country: string;
  region: string;
  flag: string;
  sommelierComment: string;
};
