import React, { useState } from "react";

const FilesAndFolders = () => {
  const [fileSystem, setFileSystem] = useState({
    Documents: ["Document1.jpg", "Document2.jpg", "Document3.jpg"],
    Desktop: ["Screenshot1.jpg", "videopal.mp4"],
    Downloads: {
      Drivers: ["Printerdriver.dmg", "cameradriver.dmg"],
      Applications: [
        "Webstorm.dmg",
        "Pycharm.dmg",
        "FileZila.dmg",
        "Mattermost.dmg",
      ],
      "chromedriver.dmg": [],
    },
  });

  const [selectedFolder, setSelectedFolder] = useState(fileSystem);

  const handleCreateFolder = (folderName) => {
    setSelectedFolder((prev) => {
      return { ...prev, [folderName]: [] };
    });
  };

  const handleCreateFile = (fileName) => {
    setSelectedFolder((prev) => {
      return { ...prev, [fileName]: [] };
    });
  };

  const handleEditFile = (folder, oldFileName, newFileName) => {
    setSelectedFolder((prev) => {
      const updatedFiles = prev[folder].map((file) =>
        file === oldFileName ? newFileName : file
      );
      return { ...prev, [folder]: updatedFiles };
    });
  };

  const handleDelete = (folder, fileName) => {
    setSelectedFolder((prev) => {
      const updatedFiles = prev[folder].filter((file) => file !== fileName);
      return { ...prev, [folder]: updatedFiles };
    });
  };

  const renderFileOrFolder = (name, isFolder) => {
    if (isFolder) {
      return (
        <div key={name}>
          <span className="folder" onClick={() => handleOpenFolder(name)}>
            {name}
          </span>
          <span
            className="delete"
            onClick={() => handleDelete(selectedFolder, name)}
          >
            🗑
          </span>
        </div>
      );
    } else {
      return (
        <div key={name}>
          <span>{name}</span>
          <span
            className="edit"
            onClick={() => handleEditFile(selectedFolder, name)}
          >
            ✎
          </span>
          <span
            className="delete"
            onClick={() => handleDelete(selectedFolder, name)}
          >
            🗑
          </span>
        </div>
      );
    }
  };

  const handleOpenFolder = (folderName) => {
    setSelectedFolder(fileSystem[folderName]);
  };

  const handleGoBack = () => {
    setSelectedFolder(fileSystem);
  };

  return (
    <div>
      <div>
        <button onClick={handleGoBack}>Go Back</button>
      </div>
      <div>
        {Object.keys(selectedFolder).map((name) => {
          return renderFileOrFolder(name, Array.isArray(selectedFolder[name]));
        })}
      </div>
      <div>
        <button
          onClick={() => handleCreateFolder(prompt("Enter folder name:"))}
        >
          Create Folder
        </button>
        <button onClick={() => handleCreateFile(prompt("Enter file name:"))}>
          Create File
        </button>
      </div>
    </div>
  );
};

export default FilesAndFolders;
