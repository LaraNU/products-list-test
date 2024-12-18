import styles from "./ProductsPage.module.css";
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Navigation from "../components/Navigation";
import { useEffect, useState } from "react";
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
  const [selectCategories, setCategories] = useState("all");

  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products);
  const favoriteProducts = products.filter((product) => product.isLiked === true);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fakestoreApi.endpoints.getProducts.initiate());
    }
  }, [dispatch, products.length]);

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };

  return (
    <>
      <Navigation />
      <TextField label="search" id="fullWidth" fullWidth />

      <FormControl sx={{ m: 2, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">Products</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCategories}
          label="Products"
          onChange={handleChange}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"favorites"}>Favorites</MenuItem>
        </Select>
      </FormControl>

      {selectCategories === "all" ? (
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
      ) : (
        <div className={styles.cardsContainer}>
          {favoriteProducts?.map((card: CardProps) => (
            <ProductCard
              key={card.id}
              id={card.id}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsPage;
