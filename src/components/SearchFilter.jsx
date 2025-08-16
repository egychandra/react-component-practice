import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Shirt",
    category: "Clothes"
  },
  {
    id: 3,
    name: "Book",
    category: "Books"
  },
  {
    id: 4,
    name: "Phone",
    category: "Electronics"
  }
]

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || product.category === category)
  );

  return (
    <div className="w-md max-w-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Search & Filter</h1>
      <input
        className="border px-3 py-2 rounded w-full mb-4"
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border px-3 py-2 rounded w-full mb-4"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
        <option value="Books">Books</option>
      </select>
      <ul className="grid sm:grid-cols-2 gap-4">
        {filteredProducts.map(product => (
          <li key={product.id} className="border rounded p-4">{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchFilter;