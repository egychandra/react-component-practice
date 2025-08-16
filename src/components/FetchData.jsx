import { useState, useEffect } from "react"

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    // fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    //   .then((res) => {
    //     if (!res.ok) throw new Error("Failed to fetch");
    //     return res.json();
    //   })
    //   .then((data) => setPosts(data))
    //   .catch((err) => setError(err.message))
    //   .finally(() => setLoading(false));

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        if (!response.ok) throw new Error("Failed to fetch.");
        const result = await response.json();
        setData(result);
      } 
      catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  if (loading) return <p className="p-6">Loading...</p>
  if (error) return <p className=" text-red-500 p-6">{error}</p>

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Fetch Data From API</h1>
      <ul className="space-y-3">
        {data.map(item => (
          <li key={item.id} className="border rounded p-4">
            <h2 className="font-bold">{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FetchData;