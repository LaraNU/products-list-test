import styles from "./ProductsPage.module.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Skeleton,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../redux/productsApiRedux";
import { RootState } from "../redux/store";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const ProductsPage = () => {
  const [selectCategories, setCategories] = useState("all");
  const { isLoading } = useGetProductsQuery();

  const products = useSelector((state: RootState) => state.products);
  const favoriteProducts = products.filter((product) => product.isLiked === true);

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };

  return (
    <>
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

      {isLoading ? (
        <div className={styles.cardsContainer}>
          <Skeleton
            variant="rectangular"
            width={310}
            height={480}
            sx={{ borderRadius: "20px" }}
          />
          <Skeleton
            variant="rectangular"
            width={310}
            height={480}
            sx={{ borderRadius: "20px" }}
          />
          <Skeleton
            variant="rectangular"
            width={310}
            height={480}
            sx={{ borderRadius: "20px" }}
          />
        </div>
      ) : (
        <div className={styles.cardsContainer}>
          {selectCategories === "all"
            ? products?.map((card: CardProps) => (
                <ProductCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              ))
            : favoriteProducts?.map((card: CardProps) => (
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
