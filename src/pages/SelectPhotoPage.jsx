import SelectBlock from "components/SelectBlock";
import ImageBlock from "components/ImageBlock";

const SelectPhotoPage = ({ form, handleSelect, handleClose }) => {
  return (
    <div className="container">
      <SelectBlock handleSelect={handleSelect} />
      <ImageBlock form={form} handleClose={handleClose} />
    </div>
  );
};

export default SelectPhotoPage;
