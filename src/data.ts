import { Product } from "./types/Product";

export const sampleProducts:Product[] = [
    {
        name: 'Nike Slim Shirt',
        slug: "nike-slim-shirt",
        image: "../public/images/p1.jpg",
        category: "Shirts",
        brand: "Nike",
        price: 120,
        countInStock: 10,
        description: "High quality product",
        rating: 4.5,
        numReviews: 10
    },
    {
        name: 'Adidas fit Shirt',
        slug: "adidas-fit-shirt",
        image: "../public/images/p2.jpg",
        category: "Shirts",
        brand: "Adidas",
        price: 100,
        countInStock: 20,
        description: "High quality product",
        rating: 4.0,
        numReviews: 10
    },
    {
        name: 'Lacoste Free Pants',
        slug: "lacoste-free-pants",
        image: "../public/images/p3.jpg",
        category: "Pants",
        brand: "Lacoste",
        price: 180,
        countInStock: 8,
        description: "High quality product",
        rating: 4.8,
        numReviews: 20
    },
     {
        name: 'Nike Slim Pants',
        slug: "nike-slim-pants",
        image: "../public/images/p4.jpg",
        category: "Pants",
        brand: "Nike",
        price: 78,
        countInStock: 18,
        description: "High quality product",
        rating: 4.5,
        numReviews: 14
    }
]