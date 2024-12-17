import styles from "./ProductCard.module.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeProduct, deleteProduct } from "../redux/productSlice";
import { RootState } from "../redux/store";

type ProdactCardProps = {
  id: number;
  title: string;
  price?: string;
  category?: string;
  description: string;
  image: string;
};

const ProductCard = ({ id, title, description, image }: ProdactCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLiked = useSelector(
    (state: RootState) =>
      state.products.find((product: ProdactCardProps) => product.id === id)?.isLiked
  );

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  const handleLike = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(likeProduct(id));
  };

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(deleteProduct(id));
  };

  return (
    <div
      onClick={(event) => {
        if (event.currentTarget.id === id.toString()) {
          handleNavigate();
        }
      }}
      id={id.toString()}
      className={styles.card}
    >
      <div className={styles.cardImgContainer}>
        <img className={styles.cardImg} src={image} alt={title} />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDesc}>{description}</p>
        <div className={styles.cardIcon}>
          <FavoriteBorderIcon
            id="like"
            onClick={handleLike}
            style={{ fill: isLiked ? "red" : "gray" }}
          />
          <div className={styles.cardIconEdit}>
            <EditIcon
              onClick={(event) => {
                event.stopPropagation();
                console.log(event, "EditIcon");
              }}
            />
            <DeleteIcon onClick={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
