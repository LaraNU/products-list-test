import styles from "./CreateProductPage.module.css";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/productSlice";

type ProdactCardProps = {
  title?: string;
  price?: string;
  category?: string;
  description?: string;
  image?: string;
};

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<ProdactCardProps> = (data) => {
    console.log(data);
    dispatch(createProduct(data));
  };

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Create your product</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Title"
          id="fullWidth"
          className={styles.input}
          {...register("title", { required: true })}
        />
        <TextField
          fullWidth
          label="Price"
          id="fullWidth"
          type="number"
          className={styles.input}
          {...register("price", { required: true })}
        />
        <TextField
          fullWidth
          label="Category"
          id="fullWidth"
          className={styles.input}
          {...register("category", { required: true })}
        />
        <TextField
          fullWidth
          id="fullWidth"
          multiline
          maxRows={4}
          label="Description"
          {...register("description", { required: true })}
        />
        <TextField
          fullWidth
          label="Image"
          id="fullWidth"
          className={styles.input}
          {...register("image", { required: true })}
        />
        <input type="submit" className={styles.inputSubmit} />
      </form>
    </main>
  );
};

export default CreateProductPage;
