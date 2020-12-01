import React from "react";
import "./SearchBar.scss";
import {
  FaBars,
  FaChevronDown,
  FaAlignLeft,
  FaSearch,
  FaTh,
} from "react-icons/fa";
import { MdSort } from "react-icons/md";

export const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <div className="sort-container">
        <span id="fa-align-left">
          {" "}
          <MdSort />{" "}
        </span>
        <span id="sort-text">Sort by Name</span>
        <span id="fa-chevron-down">
          {" "}
          <FaChevronDown />{" "}
        </span>
      </div>
      <div className="search2-container">
        <label htmlFor="search-label"></label>
        <span>
          <FaSearch />
        </span>
        <input type="text" placeholder="Search" />
      </div>
      <div className="group">
        <div className="thumbnail">
          <div className="thumbnail-group">
            <span id="chart-icon">
              {" "}
              <FaTh />{" "}
            </span>
          </div>

          <span id="bar-icon">
            {" "}
            <FaBars />{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
