
import Home from "./pages/Home"
import { useState } from "react"
import Checkout from "./pages/Checkout"
import Header from "./components/Header"
import { Route, Routes } from "react-router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [dogList, setDogList] = useState([])
  return (
    <div className="flex flex-col w-full min-h-screen ">
      <Header />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <Home dogList={dogList} setDogList={setDogList}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>



    </div>

  )
}