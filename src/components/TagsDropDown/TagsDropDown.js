import React from "react";
import Context from "../Context/Context";
import "./TagsDropDown.scss";

const TagsDropDown = props => (
  <Context.Consumer>
    {({ tags }) => (
      <div hidden={!props.dropDownIsOpen} className="TagsDropDown">
        <ul className="TagsDropDown__list">
          {tags.map(tag => (
            <div
              key={tag}
              onClick={props.getTag(tag)}
              className="TagsDropDown__item"
            >
              {tag}
            </div>
          ))}
        </ul>
      </div>
    )}
  </Context.Consumer>
);

export default TagsDropDown;
