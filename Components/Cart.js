import React from "react";
import { useCart } from "react-use-cart";
import Cartbar from "./Cartbar";

function Cart() {
  const { isEmpty, items } = useCart();

  if (isEmpty)
    return (
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        Your Cart is empty:
      </h1>
    );

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        You have ordered:
      </h1>
      <div className="py-4 container">
        <div className="row-sm-12">
          {items.map((item) => {
            return (
              <Cartbar
                img={item.img}
                title={item.title}
                desc={item.desc}
                item={item}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cart;
