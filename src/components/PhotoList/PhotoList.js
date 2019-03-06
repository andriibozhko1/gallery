import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import PhotoCard from "./PhotoCard";
import Context from "../Context/Context";
import Header from "../Header/Header";
import Loader from "../Loader/Loader"
import { Link } from "react-router-dom";
import "./PhotoList.scss";

export default class PhotoList extends Component {
  state = {
    currentPage: 1,
    quantityItemsOnPage: 10,
    filteredByTagName: null,
    query: ""
  };

  photo = [];

  get filteredPhoto() {
    let filteredPhoto = this.photo.filter(photo =>
      photo.albumId === +this.props.match.params.id ? photo : null
    );

    if (this.state.filteredByTagName) {
      filteredPhoto = filteredPhoto.filter(photo => {
        if (photo.tags.length > 0) {
          return photo.tags.find(tagData => {
            if (tagData.tag === this.state.filteredByTagName) {
              return tagData;
            }
          });
        }
      });
    }

    filteredPhoto = filteredPhoto.filter(photo => {
      if (photo.title.toLowerCase().includes(this.state.query.toLowerCase())) {
        return photo;
      }
    });

    return filteredPhoto;
  }

  get visiblePhoto() {
    const startIndex =
      (this.state.currentPage - 1) * this.state.quantityItemsOnPage;
    const endIndex = startIndex + this.state.quantityItemsOnPage;
    const visiblePhoto = this.filteredPhoto.slice(startIndex, endIndex);

    return visiblePhoto;
  }

  setFilterTag = tag => {
    if (tag === "null") {
      this.setState({ filteredByTagName: null });
      return;
    }

    this.setState({ filteredByTagName: tag });
  };

  setFilterQuery = query => {
    this.setState({ query });
  };

  selectPage = currentPage => {
    this.setState({ currentPage });
  };

  render() {
    return (
      <Context.Consumer>
        {props => {
          this.photo = props.photo;

          if (props.isLoading) {
            return <Loader />;
          } else {
            return (
              <>
                <Link to="/">
                  <div className="PhotoList__btn-back">BACK</div>
                </Link>
                <Header setFilterTag={this.setFilterTag} setFilterQuery={this.setFilterQuery}/>
                <div className="PhotoList">
                  <ul className="PhotoList__list">
                    {this.visiblePhoto.map(photo => (
                      <li key={photo.id} className="PhotoList__item">
                        <PhotoCard photoData={photo} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Pagination
                  currentPage={this.state.currentPage}
                  visibleItems={this.visiblePhoto}
                  generalQuantityItems={this.filteredPhoto.length}
                  selectPage={this.selectPage}
                />
              </>
            );
          }
        }}
      </Context.Consumer>
    );
  }
}
