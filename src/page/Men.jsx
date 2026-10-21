import { useContext, useState } from "react";
import Layout from "../shared/Layout";
import ProductContext from "../context/ProductProvider";
import { useEffect } from "react";
import ProductsItems from "../shared/ProductsItems";

function Men() {
  const { products } = useContext(ProductContext);
  const [menProducts, setMenProduct] = useState([]);

  useEffect(() => {
    const found = products?.filter ((items) => items?.category === "men");
    if (found){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMenProduct(found)
    }
  },[products]);

  return (
    <Layout>
      <div className="bg-gray-200 min-h-screen">
        <p className="text-black font-semibold text-lg">men</p>

        <ProductsItems products={menProducts}/>
      </div>
    </Layout>
  );
}

export default Men;
