import { useState } from "react"

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(null);

  const validateFile = (selectedFile) => {
    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const maxSize = 2 * 1024 * 1024; // 2 MB

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Only JPG, PNG, or PDF files are allowed.");
      return false;
    }

    if (selectedFile.size > maxSize) {
      setError("File size must be less than 2 MB.");
      return false;
    }

    return true;
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if(!validateFile(selectedFile)) return;

    setFile(selectedFile);
    setError("");
  }

  const hadleFileUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select a valid file before uploading.");
      return;
    }

    alert("File uploaded successfully!");
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (!validateFile(droppedFile)) return;

    setFile(droppedFile);
    setError("");
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  }

  const handleDragLeave = () => {
    setIsDragging(false);
  }

  const handleFileRemove = () => {
    setFile(null);
  }

  return (
    <div className="w-md max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">File Upload</h1>

    {/* Drag & Drop Area */}
    <div
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${ isDragging ? "border-blue-300 bg-blue-50" : "border-gray-300 bg-gray-50" }`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <p className="text-gray-600">Drag & drop a file here, or click to select</p>
      <input
        className="hidden"
        id="file"
        type="file"
        onChange={handleFileChange}
      />
      <label
        className="inline-block bg-blue-500 mt-2 px-4 py-2 text-white rounded cursor-pointer hover:bg-blue-600"
        htmlFor="file"
      >
        Browse file
      </label>
    </div>

    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

    <form
      className="text-right"
      onSubmit={hadleFileUpload}
    >
      <button
        className="bg-green-500 rounded text-white px-4 py-2 mt-2 hover:bg-green-600 cursor-pointer"
        type="submit"
      >
        Upload
      </button>
    </form>

    {file && (
      <div className="mt-4 border border-gray-300 bg-gray-50 rounded p-4">
        <div className="flex justify-between mb-2">
          <p className="font-semibold">Uploaded file:</p>
          <button
            className="text-red-500 text-sm hover:underline"
            onClick={handleFileRemove}
          >
            Remove
          </button>
        </div>

        <p><strong>Name:</strong> {file.name}</p>
        <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
        <p><strong>Type:</strong> {file.type}</p>

        {file.type.startsWith("image/") && (
          <img
            className="mt-4 max-w-full h-auto rounded"
            src={URL.createObjectURL(file)}
            alt="Preview Image"
          />
        )}
      </div>
    )}

    </div>
  )
}

export default FileUpload