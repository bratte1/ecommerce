import { useContext, useEffect, useState } from "react";
import ProductContext from "../context/ProductProvider";
import Layout from "../shared/Layout";
import ProductsItems from "../shared/ProductsItems";

function Kids() {
 const { products } = useContext(ProductContext);
  const [kidsProducts, setkidsProduct] = useState([]);

  useEffect(() => {
    const found = products?.filter ((items) => items?.category === "kids");
    if (found){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setkidsProduct(found)
    }
  },[products]);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">kids</p>

        <ProductsItems products={kidsProducts}/>
      </div>
    </Layout>
  );
}

export default Kids;
