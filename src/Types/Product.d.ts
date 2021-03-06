interface Product {
  title: string;
  author: string;
  photos: string[];
  blurb1: string;
  blurb2: string;
  price: number;
  publishedDate: Date;
  id: number;
  slug: string;
  inventory: number;
  thumbnail: string;
  priceId: string;
}

interface ApiProduct {
  id: number;
  blurb1: string;
  blurb2: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  inventory: number;
  devPriceId: string;
  prodPriceId: string;
  thumbnail: string;
  price: number;
  images: {
    fullSize: string[];
  };
}
interface AllStrapiBooks {
  nodes: ApiProduct[];
}
type ProductsById = ById<Product>;

interface ProductQuantityById {
  [index: string]: number;
}
