import MoreIcon from "./MoreIcon";
import "./item.scss";

const CardItem = ({ item }) => {
  return (
    <div className="api-item" style={{ borderTopColor: item.color }}>
      <div className="item-header">
        <h4>{item.title}</h4>
        <MoreIcon />
      </div>

      <div className="item-info">
        <div className="blance">
          <span className="text">Balance Due</span>
          <span className="number">{item.info.blance}</span>
        </div>
        <div className="blance">
          <span className="text">total invoiced</span>
          <span className="number">{item.info.total}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
