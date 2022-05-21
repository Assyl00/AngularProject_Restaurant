export interface Menu{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category_id: number;
}
export interface Category{
  id: number;
  name: string;
}

export interface AuthToken {
  token: string;
}

export interface Order{
	id: number;
	product: string;
}