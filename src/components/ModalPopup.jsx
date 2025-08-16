import { useState } from "react"

const ModalPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-sm text-center">
      <h1 className="text-2xl font-bold mb-4">Modal Popup</h1>
      <button
        className="bg-blue-500 rounded px-4 py-2 cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-300 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white w-full max-w-sm p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">This is a title modal</h2>
            <p className="mb-4">This is a content modal</p>
            <button
              className="bg-red-500 text-white rounded px-4 py-2 mt-4 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ModalPopup;