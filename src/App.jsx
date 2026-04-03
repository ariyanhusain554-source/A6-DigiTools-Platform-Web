import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Rating from "./components/Rating";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";

const data = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const dataPromise = data();

function App() {
  const [activeTab, setActiveTab] = useState("Products");

  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Rating></Rating>

      <div className="tabs tabs-box bg-transparent max-w-xs items-center mx-auto">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab text-2xl text-white 
          ${activeTab === "Products" ? "bg-[linear-gradient(to_right,#4F39F6,#9514FA)]" : "bg-zinc-400"} rounded-l-3xl`}
          aria-label="Products"
          onClick={() => setActiveTab("Products")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab text-2xl text-white 
          ${activeTab === "Cart" ? "bg-[linear-gradient(to_right,#4F39F6,#9514FA)]" : "bg-zinc-400"} rounded-r-3xl`}
          aria-label={`Cart(${carts.length})`}
          onClick={() => setActiveTab("Cart")}
        />
      </div>

      {activeTab === "Products" && (
        <Products
          dataPromise={dataPromise}
          carts={carts}
          setCarts={setCarts}
        ></Products>
      )}

      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}></Cart>}
      
     <Steps></Steps>
     <Pricing></Pricing>

      <Footer></Footer>
    </>
  );
}

export default App;
