import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl mb-4">Counter</h1>
      <p className="text-xl mb-4">{count}</p>
      <div className="flex justify-center gap-2 mb-4">
        <button
          className="border rounded px-4 py-1 bg-red-500 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={count === 0}
          onClick={() => setCount(count - step)}
        >
          -
        </button>
        <button
          className="border rounded px-4 py-1 bg-blue-500 text-white cursor-pointer"
          onClick={() => setCount(count + step)}
        >
          +
        </button>
        <button
          className="border rounded px-4 py-1 bg-gray-500 text-white cursor-pointer"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
      <div>
        <input
          type="number"
          className="border border-gray-300 rounded w-20 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Counter;