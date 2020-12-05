import React from "react";
import "./item.scss";
import CardItem from "./CardItem";
import data from "../../data/index";

const CardList = () => {
  return (
    <div className="card-list">
      {data?.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CardList;
