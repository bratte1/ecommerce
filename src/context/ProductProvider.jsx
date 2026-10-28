import { useEffect } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Products } from "../../data/data";





const ProductContext = createContext();

function ProductProvider({ children }) {
  const [num, setNum] = useState(6);
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState(Products);

  const [CartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || [],
  );
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    console.log("cart:", CartItems);

    const total = CartItems?.reduce((acc, curr) => acc + curr?.quantity, 0);
    if (total) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCartCount(total);
    }
  }, [CartItems]);
  const token = false;
  // const HandleGetProduct = async () => {
  //   try {
  //     const res = await fetch("http://localhost:8000/products", {
  //       method: "GET",
  //     });

  //     const data = await res.json();

  //     if (res?.ok) {
  //       console.log("data:", data);
  //       setProducts(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/set-state-in-effect
  //   HandleGetProduct();
  // }, []);

  useEffect(() => {
    console.log("context:", products);
  }, [products]);

  const AddToCart = async (prod, quantity, size) => {
    try {
      if (!token) {
        //** */1  Get the users cart
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        const resolvedSize = size || prod?.defaultSize;
        let updatedCart;

        //** */2 check if the item exist in the cart
        const existingProduct = storedCart?.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id) && item?.size === resolvedSize,
        );

        //** */3  Upadate or add new Product
        if (existingProduct) {
          // Upadate quantity or size
          updatedCart = storedCart?.map((item) =>
            Number(item?.id) === Number(existingProduct?.id)
              ? {
                  ...item,
                  quantity: existingProduct?.quantity + quantity,
                  size: resolvedSize,
                }
              : item,
          );

          toast.info("Existing item updated successfully");
        } else {
          // Add new product
          updatedCart = [
            ...storedCart,
            { ...prod, quantity: quantity, size: resolvedSize },
          ];

          toast.success("Item added to cart successfully");
        }

        // **4 Upodating Cart state and localstorage
        console.log("update:", updatedCart);
        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      } else {
        console.log("Authentified");
      }
    } catch (error) {
      console.log(error);
    }
  };
const UpdateCart = async (prod, quantity, size) => {
    const resolvedSize = size || prod?.defaultSize;
    try {
      if (!token) {
        //1.Get users cart
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        let updatedCart;

        //2. Check prod exist in the users cart
        const existingProd = storedCart?.find(
          (item) => parseInt(item?.id) === parseInt(prod?.id),
        );

        if (existingProd) {
          // update the product
          updatedCart = storedCart?.map((item) =>
            parseInt(item?.id) === parseInt(existingProd?.id)
              ? { ...item, quantity, resolvedSize }
              : item,
          );

          toast.success("Cart updated sucessfully");
        } else {
          //Throw error
          toast.error("Product does not exist in cart!");
        }

        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      } else {
        console.log("User");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteCartItem = async (id) => {
    try {
      if (!token) {
        //Get users cart
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        let updatedCart;
        //2. Check prod exist in the users cart
        const existingProd = storedCart?.find(
          (item) => parseInt(item?.id) === parseInt(id),
        );
        if (existingProd) {
          // update the product
          updatedCart = storedCart?.filter(
            (item) => parseInt(item?.id) !== parseInt(id),
          );

          toast.success("Cart updated sucessfully");
        } else {
          //Throw error
          toast.error("Product does not exist in cart!");
        }

        setCartItems(updatedCart);
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      } else {
        console.log("Authentified");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ProductContext.Provider
      value={{
        num,
        setNum,
        products,
        AddToCart,
        cartCount,
        UpdateCart,
        CartItems,
        DeleteCartItem
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductContext;

export { ProductProvider };
