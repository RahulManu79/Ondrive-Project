import React, { useState } from "react";

const KEY = "9e63e70f-5443-4649-8d4b-b7df4d958bac";

export default function App() {
  const [data, setData] = useState([]);
  const handleCancel = () => console.log("CANCELLED");

  let handleSuccess = (files) => {
    console.log(files);
    // setData(files?.value);
  };

  const handleError = (err) => console.log("ERROR: ", err);

  let launchOneDrivePicker = function(
    oneDriveApplicationId,
    action,
    multiSelect,
    advancedOptions
  ) {
    console.log(oneDriveApplicationId);
    return new Promise(function(resolve, reject) {
      let odOptions = {
        clientId: oneDriveApplicationId,
        action: action || "share",
        multiSelect: multiSelect || true,
        openInNewWindow: true,
        advanced: advancedOptions || {},
        success: function(files) {
          handleSuccess(files);
        },
        cancel: function() {
          handleCancel();
        },
        error: function(e) {
          handleError(e);
        },
      };
      window.OneDrive.open(odOptions);
    });
  };

  console.log("data", data);

  return (
    <div className="App">
      <button onClick={() => launchOneDrivePicker(KEY, "share")}>
        Open Picker
      </button>

      {/* {data.length > 0 && <p> {data[0]?.name}</p>}
      {data.length > 0 && (
        <a href={data[0]?.permissions[0]?.link?.webUrl} target="_blank">
          <p>{data[0]?.permissions[0]?.link?.webUrl}</p>
        </a>
      )} */}
    </div>
  );
}
