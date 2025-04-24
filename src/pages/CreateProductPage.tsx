import styles from "./CreateProductPage.module.css";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ProdactCardProps> = (data) => {
    console.log(data);
    dispatch(createProduct(data));
    navigate("/products");
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
          {...register("title", {
            required: "Title is required.",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only alphabetic characters are allowed",
            },
          })}
          error={!!errors.title}
          helperText={errors.title?.message?.toString()}
        />
        <TextField
          fullWidth
          label="Price"
          id="fullWidth"
          type="number"
          className={styles.input}
          {...register("price", { required: "Price is required" })}
          error={!!errors.price}
          helperText={errors.price?.message?.toString()}
        />
        <TextField
          fullWidth
          label="Category"
          id="fullWidth"
          className={styles.input}
          {...register("category", {
            required: "Category is required",
            minLength: {
              value: 3,
              message: "Category must be at least 3 characters long",
            },
          })}
          error={!!errors.category}
          helperText={errors.category?.message?.toString()}
        />
        <TextField
          className={styles.input}
          fullWidth
          id="fullWidth"
          multiline
          maxRows={4}
          label="Description"
          {...register("description", {
            required: "Description is required",
            minLength: {
              value: 10,
              message:
                "Please provide a more detailed description (minimum 10 characters)",
            },
          })}
          error={!!errors.description}
          helperText={errors.description?.message?.toString()}
        />
        <TextField
          fullWidth
          label="Image"
          id="fullWidth"
          className={styles.input}
          {...register("image", {
            required: "Image URL is required",
          })}
          error={!!errors.image}
          helperText={errors.image?.message?.toString()}
        />
        <input type="submit" className={styles.inputSubmit} />
      </form>
    </main>
  );
};

export default CreateProductPage;
