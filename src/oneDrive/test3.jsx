import React, { useState } from "react";
import axios from "axios";

const OneDriveUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleFileSelect = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const accessToken = "<access_token>";
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/octet-stream",
        },
        onUploadProgress: (progressEvent) => {
          setProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      };

      const formData = new FormData();
      formData.append("file", file, file.name);

      const response = await axios.put(
        `https://graph.microsoft.com/v1.0/me/drive/root:/${file.name}:`,
        formData,
        config
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleUpload}>Upload</button>
      <div>Progress: {progress}%</div>
      {error && <div>Error: {error.message}</div>}
    </div>
  );
};

export default OneDriveUpload;
