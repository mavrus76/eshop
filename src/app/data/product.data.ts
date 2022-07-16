import { Product } from '../types/card';

export const product: Product = {
  id: 1,
  company: 'Google',
  title: 'Смартфон Google Pixel 4 XL 6/128GB',
  image: 'https://cdn1.ozone.ru/s3/multimedia-5/6064227317.jpg',
  rating: {
    value: 5,
    reviews: 4,
  },
  price: {
    value: 30000,
    discount: 0.17,
  },
  deliveryOptions: {
    delivery: '21.07',
    postamate: true,
    available: 1,
  },
  badge: {
    color: '#198838',
    text: 'Выбор покупателей',
  },
  colors: {
    one: {
      color: 'black',
      image: 'https://cdn1.ozone.ru/s3/multimedia-5/6064227317.jpg',
    },
    two: {
      color: 'white',
      image: 'https://cdn1.ozone.ru/s3/multimedia-b/6064227323.jpg',
    },
  },
};

export const products: Array<Product> = [
  {
    id: 1,
    company: 'Google',
    title: 'Смартфон Google Pixel 4 XL 6/128GB',
    image: 'https://cdn1.ozone.ru/s3/multimedia-5/6064227317.jpg',
    rating: {
      value: 5,
      reviews: 4,
    },
    price: {
      value: 30000,
      discount: 0.17,
    },
    deliveryOptions: {
      delivery: '21.07',
      postamate: true,
      available: 1,
    },
    badge: {
      color: '#198838',
      text: 'Выбор покупателей',
    },
    colors: {
      one: {
        color: 'black',
        image: 'https://cdn1.ozone.ru/s3/multimedia-5/6064227317.jpg',
      },
      two: {
        color: 'white',
        image: 'https://cdn1.ozone.ru/s3/multimedia-b/6064227323.jpg',
      },
    },
  },
  {
    id: 2,
    company: 'Google',
    title: 'Смартфон Google Pixel 3 64GB',
    image: 'https://cdn1.ozone.ru/s3/multimedia-9/6164669013.jpg',
    rating: {
      value: 5,
      reviews: 4,
    },
    price: {
      value: 24540,
      discount: 0.3,
    },
    deliveryOptions: {
      delivery: '21.07',
      postamate: false,
      available: 2,
    },
    badge: {
      color: '#D93025',
      text: 'Лучшая цена',
    },
    colors: {
      one: {
        color: 'black',
        image: 'https://cdn1.ozone.ru/s3/multimedia-9/6164669013.jpg',
      },
      two: {
        color: 'purple',
        image: 'https://cdn1.ozone.ru/s3/multimedia-t/6099148781.jpg',
      },
    },
  },
  {
    id: 3,
    company: 'Apple',
    title: 'Смартфон Apple iPhone Xr 128GB',
    image: 'https://cdn1.ozone.ru/s3/multimedia-p/6025924669.jpg',
    rating: {
      value: 5,
      reviews: 4,
    },
    price: {
      value: 54990,
      discount: 0,
    },
    deliveryOptions: {
      delivery: '19.07',
      postamate: false,
      available: 2,
    },
    badge: {
      color: '#e37401',
      text: 'Быстрая доставка',
    },
    colors: {
      one: {
        color: 'white',
        image: 'https://cdn1.ozone.ru/s3/multimedia-p/6025924669.jpg',
      },
      two: {
        color: '#fa604b',
        image: 'https://cdn1.ozone.ru/s3/multimedia-w/6288635828.jpg',
      },
    },
  },
];
