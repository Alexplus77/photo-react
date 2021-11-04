import "App.css";
import { nanoid } from "nanoid";
import ImageItem from "./ImageItem";

const ImageBlock = ({ form, handleClose }) => {
  return (
    <div className="container-image-block">
      {form.map((url) => (
        <ImageItem key={nanoid()} url={url} handleClose={handleClose} />
      ))}
    </div>
  );
};
export default ImageBlock;
