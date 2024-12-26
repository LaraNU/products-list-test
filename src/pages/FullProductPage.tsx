import styles from "./FullProductPage.module.css";
import { Skeleton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { RootState } from "../redux/store";
import { fakestoreApi } from "../redux/productsApiRedux";

const FullProductCard = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const product = useSelector((state: RootState) =>
    state.products.find((p) => p.id === parseInt(productId || "0"))
  );

  useEffect(() => {
    if (!product) {
      dispatch(fakestoreApi.endpoints.getProductById.initiate(Number(productId)));
    }
  }, [dispatch, product, productId]);

  return (
    <>
      {product ? (
        <div className={styles.fullCard}>
          <Link to="/products">
            <ArrowBackIcon fontSize="large" />
          </Link>

          <div className={styles.cardImgContainer}>
            <img className={styles.cardImg} src={product?.image} alt={product?.title} />
          </div>
          <div className={styles.cardInfo}>
            <p className={styles.cardTitle}>{product?.title}</p>
            <p className={styles.cardPrice}>
              Price: <span>{product?.price}</span>
            </p>
            <p className={styles.cardDesc}>
              <span>Description:</span> {product?.description}
            </p>
            <p className={styles.cardDesc}>
              <span>Category:</span> {product?.category}
            </p>
          </div>
        </div>
      ) : (
        <div className={styles.fullCard}>
          <div className={styles.cardImgContainer}>
            <Skeleton variant="rectangular" width={450} height={500} />
          </div>
          <div className={styles.cardInfo}>
            <Skeleton variant="rectangular" width={450} height={50} />
            <Skeleton variant="rectangular" width={450} height={50} />
            <Skeleton variant="rectangular" width={450} height={50} />
            <Skeleton variant="rectangular" width={450} height={50} />
          </div>
        </div>
      )}
    </>
  );
};

export default FullProductCard;
