import React from "react";
import "./file.css";
const KEY = "9e63e70f-5443-4649-8d4b-b7df4d958bac";

export default function App() {
  const handleCancel = () => console.log("CANCELLED");

  const handleSuccess = (files) => console.log("SUCCESS: ", files);

  const handleError = (err) => console.log("ERROR: ", err);

  var launchOneDrivePicker = function(
    oneDriveApplicationId,
    action,
    multiSelect,
    advancedOptions
  ) {
    return new Promise(function(resolve, reject) {
      var odOptions = {
        clientId: oneDriveApplicationId,
        action: action || "download",
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

  return (
    <div>
      <h2 className="text">Click The Button to upload file in to OneDrive</h2>
      <button
        className="file"
        onClick={() => launchOneDrivePicker(KEY, "share")}
      >
        Upload file
      </button>
    </div>
  );
}
