import { useContext, useEffect, useState } from "react";
import Layout from "../shared/Layout";
import ProductContext from "../context/ProductProvider";
import ProductsItems from "../shared/ProductsItems";

function Women() {
  const { products } = useContext(ProductContext);
  const [womenProducts, setwomenProduct] = useState([]);

  useEffect(() => {
    const found = products?.filter ((items) => items?.category === "women");
    if (found){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setwomenProduct(found)
    }
  },[products]);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <p className="text-black font-semibold text-lg">men</p>

        <ProductsItems products={womenProducts}/>
      </div>
    </Layout>
  );
}

export default Women;
