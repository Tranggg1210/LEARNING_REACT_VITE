import Home from "./pages/Home";
import Nav from "./pages/Nav";
import TodoApp from "./pages/TodoApp";
import Photos from "./pages/Photos";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Covid19news from "./pages/Covid19news";
import Blogs from "./pages/Blogs";
import Error from "./pages/Error";
import DetailBlog from "./pages/DetailBlog";
import AddNewBlog from "./pages/AddNewBlog";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TodoApp" element={<TodoApp />}></Route>
          <Route path="/Photos" element={<Photos />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/covid-19news" element={<Covid19news />}></Route>
          <Route path="/blog" element={<Blogs />}>
          </Route>
          <Route path="/blog/:id" element={<DetailBlog />}></Route>
          <Route path="/add-new-blog" element={<AddNewBlog />}></Route>
        </Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  )
}

export default App;