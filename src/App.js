import "App.css";
import { useState } from "react";

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
    const urls = await Promise.all(
      files.map((o) => {

        return fileToDataUrl(o);
      })
    );

    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
  };
  return (
    <div className="App">
      <input type="file" onChange={handleSelect} />
      <div className="blockSelect">Click to select</div>
    </div>
  );
}

export default App;
