import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className="transition ease-in-out duration-300 bg-gray-600 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-xl font-bold">
          <Link to="/">React Component Example</Link>
        </h2>
      </div>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/counter"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/modal"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              Modal
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search-filter"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              Search & Filter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo-list"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              Todo List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/file-upload"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              File Upload
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/submit-form"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              Submit Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fetch-data"
              className={({ isActive }) => `block p-2 rounded hover:bg-gray-700 ${ isActive ? "bg-gray-700" : "" }`}
            >
              Fetch Data
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;