import styles from "./ProductsPage.module.css";
import { useState, useEffect } from "react";
import getProductsApi from "../api/productApi";
import ProductCard from "../components/ProductCard";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getProductsApi();
    setProducts(data);
  };

  return (
    <div className={styles.cardsContainer}>
      {products.map((card: CardProps) => (
        <ProductCard
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
