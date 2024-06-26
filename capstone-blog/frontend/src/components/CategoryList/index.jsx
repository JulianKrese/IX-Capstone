import React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => {
        return (
          <button
            key={category.id}
            className="card"
            style={{ borderRadius: "0px", border: "none"}}
            onClick={() => {
              console.log("TODO: Navigate to categories page");
              
            }}
          >
            <div
              className="card-body d-flex w-100 justify-content-left"
              style={{
                backgroundColor: category.color + "33",
                position: "relative",
                zIndex: 0,
              }}
            >
              <h5 className="card-title">{category.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text " style={{textAlign: "left"}}>
                {category.description.substring(1, 100)} ...
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

CategoryList.prototype = {
  categories: PropTypes.array.isRequired
}