import React, { useState } from "react";
import FilePicker from "file-picker-js";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const handleUpload = () => {
    console.log("hbgjn");
    const picker = new FilePicker({
      clientId: "80917ba9-ffe4-4476-9d47-4859c632d478",
      action: "picked",
      multiSelect: false,
      success: (files) => {
        setFile(files[0]);
        console.log("File uploaded: ", file);
      },
    });
    picker.open();
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload File</button>
      {file && <p>File Name: {file.name}</p>}
    </div>
  );
};

export default UploadFile;
