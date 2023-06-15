import React from "react";
import { useCart } from "react-use-cart";

function Card(props) {
  const { addItem } = useCart();
  return (
    <>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card shadow p-3 mb-5 bg-body rounded">
          <img
            src={props.img}
            height={"300px"}
            style={{ backgroundColor: "#dedcdc" }}
            className="card-img-top image-fluid"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text ">
              <b>{props.price}</b>{" "}
              <small class="text-muted text-decoration-line-through">
                {props.prev_price}
              </small>
            </p>
            <div className="text-center">
              <button
                className="btn btn-primary"
                onClick={() => addItem(props.p)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
