import React from "react";

function ItemCard(props) {
  // console.log(props);
  return (
    <div className="col-4 ">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
        <h4 className="card-header py-3 text-white bg-primary border-primary ">
          {props.name}
        </h4>
      </div>
      <div className="card-body">
        <img src={props.image} style={{ width: "90%", alignItems: "center" }} />
      </div>
      <a
        href={"#/category/" + props.slug}
        className="btn btn-lg btn-block btn-primary"
      >
        Open the Category
      </a>
    </div>
  );
}

export default ItemCard;
