import React, { useRef, useState } from "react";
import Uppy from "@uppy/core";
import OneDrive from "@uppy/onedrive";
import { DashboardModal } from "@uppy/react";

const UploadFile = () => {
  const [uppy, setUppy] = useState(null);
  const uppyRef = useRef(null);

  const handleUpload = () => {
    if (!uppy) {
      setUppy(
        Uppy({
          id: "uppy1",
          meta: { type: "avatar" },
          autoProceed: true,
        })
      );

      uppy.use(OneDrive, {
        target: "dashboard",
        clientId: "80917ba9-ffe4-4476-9d47-4859c632d478",
      });
    }

    uppyRef.current.openModal();
  };

  return (
    <div>
      <button onClick={handleUpload}>Upload File</button>
      <DashboardModal
        uppy={uppy}
        proudlyDisplayPoweredByUppy={false}
        trigger={uppyRef}
      />
    </div>
  );
};

export default UploadFile;
