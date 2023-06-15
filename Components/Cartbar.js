import React from "react";
import { useCart } from "react-use-cart";

function Cartbar(props) {
    const {removeItem} = useCart();
  return (
    <div className="card shadow p-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={props.img}
            style={{ backgroundColor: "#dedcdc" }}
            className="img-fluid rounded-start"
            alt="..."
            width={120}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-center">
            <h5 className="card-title text-danger">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
            <p className="card-text"><b>{props.price}</b></p>
            <button type="button" className="btn btn-danger" onClick={() => removeItem(props.item.id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartbar;
