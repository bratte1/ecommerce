import { useContext } from "react"
import { FaCartShopping, FaHeart } from "react-icons/fa6"
import { Link } from "react-router-dom"
import ProductContext from "../context/ProductProvider"


function ProductsItems({products}) {
  const { AddToCart } = useContext (ProductContext)
  return (
     <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {products?.map((item) => (
            <div
              key={item.id}
              className="rounded-md shadow-2xl hover:scale-105 transition ease-in-out duration-200"
            >
              <Link
               to={`/singleProduct/${item?.id}`} 
                className="h-[300px] w-full block bg-center bg-cover"
                style={{ backgroundImage: `url("${item.image}")` }}
              ></Link>

              <div className="flexRow justify-between p-3">
                <div className="">
                  <p className="info">{item.name}</p>
                  <p className="info">${item.price}</p>
                </div>
                <div className="flex gap-3">
                   <span onClick={() => AddToCart(item, 1)} className="icon"><FaCartShopping/></span>
                  <span className="icon text-red-600"><FaHeart/></span> 
                </div>
              </div>
            </div>
          ))}
        </div>
  )
}

export default ProductsItems