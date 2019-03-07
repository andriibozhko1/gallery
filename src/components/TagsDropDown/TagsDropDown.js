import React from "react";
import { ContextConsumer } from "../../Context/Context"
import propTypes from 'prop-types'
import "./TagsDropDown.scss";

const TagsDropDown = props => (  
  <ContextConsumer>
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
  </ContextConsumer>
);

TagsDropDown.propTypes = {
  dropDownIsOpen: propTypes.bool,
  getTag: propTypes.func,
}

export default TagsDropDown;
