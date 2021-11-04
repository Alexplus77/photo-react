import "App.css";
import { useState } from "react";
import SelectPhotoPage from "pages/SelectPhotoPage";

function App() {
  const [form, setForms] = useState([]);

  const fileToDataUrl = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (evt) => {
        resolve(evt.currentTarget.result);
      });
      fileReader.addEventListener("error", (evt) => {
        reject(new Error(evt.currentTarget.error));
      });
      fileReader.readAsDataURL(file);
    });
  };
  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map((o) => fileToDataUrl(o)));
    setForms([...form, urls]);
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
  };
  const handleClose = (url) => {
    const updateForm = form.filter((urlImage) => urlImage !== url);
    setForms(updateForm);
  };

  return (
    <SelectPhotoPage
      form={form}
      handleSelect={handleSelect}
      handleClose={handleClose}
    />
  );
}

export default App;
