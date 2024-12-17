import styles from "./ProductsPage.module.css";
import { TextField } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fakestoreApi } from "../redux/productsApiRedux";
import { RootState } from "../redux/store";
import type { AppDispatch } from "../redux/store";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ProductsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const products = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fakestoreApi.endpoints.getProducts.initiate());
    }
  }, [dispatch, products.length]);

  return (
    <>
      <Navigation />
      <TextField label="fullWidth" id="fullWidth" />
      <div className={styles.cardsContainer}>
        {products?.map((card: CardProps) => (
          <ProductCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
