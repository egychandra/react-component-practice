import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import Counter from "./components/Counter"
import ModalPopup from "./components/ModalPopup"
import SearchFilter from "./components/SearchFilter"
import TodoList from "./components/TodoList"
import FileUpload from "./components/FileUpload"
import SubmitForm from "./components/SubmitForm"
import FetchData from "./components/FetchData"

function App() {
  return (
    <Router basename="/react-component-practice/">
      <div className="flex">
        <Sidebar />
        <div className="p-6 mx-auto max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/counter" element={<Counter />}/>
            <Route path="/modal" element={<ModalPopup />}/>
            <Route path="/search-filter" element={<SearchFilter />}/>
            <Route path="/todo-list" element={<TodoList />}/>
            <Route path="/file-upload" element={<FileUpload />}/>
            <Route path="/submit-form" element={<SubmitForm />}/>
            <Route path="/fetch-data" element={<FetchData />}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
