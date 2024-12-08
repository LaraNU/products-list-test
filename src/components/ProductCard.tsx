import styles from "./ProductCard.module.css";

type ProdactCardProps = {
  id: number;
  title: string;
  price?: string;
  category?: string;
  description: string;
  image: string;
};

const ProductCard = ({ id, title, description, image }: ProdactCardProps) => {
  return (
    <div id={id.toString()} className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img className={styles.cardImg} src={image} alt={title} />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDesc}>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
