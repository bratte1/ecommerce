import { Link } from "react-router-dom";

import Layout from "../shared/Layout";
import { useContext } from "react";
import ProductContext from "../context/ProductProvider";
import { useEffect } from "react";
import ProductsItems from "../shared/ProductsItems";

function Home() {
  const { products } = useContext(ProductContext);

  useEffect(() => {
    console.log("Home:", products);
    
  },[products]);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold">ALL</p>

        <ProductsItems products={products}/>
      </div>
    </Layout>
  );
}

export default Home;
