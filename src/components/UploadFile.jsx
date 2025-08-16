import { useState } from "react";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
  const maxSize = 2 * 1024 * 1024; // 2 MB

  const validateFile = (selectedFile) => {
    if (!selectedFile) {
      setError("Please select a file.");
      setFile(null);
      return false;
    }

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Only JPG, PNG, or PDF files are allowed.");
      setFile(null);
      return false;
    }

    if (selectedFile.size > maxSize) {
      setError("File size must be less than 2 MB.");
      setFile(null);
      return false;
    }

    setError("");
    return true;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (validateFile(selectedFile)) {
      setFile(selectedFile);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (validateFile(droppedFile)) {
      setFile(droppedFile);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemoveFile = () => {
    setFile(null);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a valid file before uploading.");
      return;
    }
    alert("File uploaded successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">File Upload Example</h1>

      {/* Drag & Drop Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p className="text-gray-600">Drag & drop a file here, or click to select</p>
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden"
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Browse File
        </label>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Upload
        </button>
      </form>

      {file && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          <div className="flex justify-between items-center">
            <h2 className="font-bold">Uploaded File:</h2>
            <button
              onClick={handleRemoveFile}
              className="text-red-500 hover:underline text-sm"
            >
              Remove
            </button>
          </div>
          <p><strong>Name:</strong> {file.name}</p>
          <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
          <p><strong>Type:</strong> {file.type}</p>

          {file.type.startsWith("image/") && (
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="mt-2 max-w-full h-auto rounded border"
            />
          )}
        </div>
      )}
    </div>
  );
}
 export default UploadFile;