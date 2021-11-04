import "App.css";
import { FaTimes } from "react-icons/fa";
const ImageItem = ({ url, handleClose }) => {
  return (
    <div className="image-block">
      <img src={url} />
      <i className="fa-times" onClick={() => handleClose(url)}>
        {" "}
        <FaTimes />
      </i>
    </div>
  );
};

export default ImageItem;
