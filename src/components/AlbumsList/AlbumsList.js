import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import AlbumsCard from "./AlbumsCard"
import { Link } from "react-router-dom";
import "./AlbumsList.scss";

export default class AlbumsList extends Component {
  state = {    
    currentPage: 1,
    quantityItemsOnPage: 20,
    visibleAlbums: [],
  }

  get visibleAlbums () {    
      const startIndex = (this.state.currentPage - 1) * this.state.quantityItemsOnPage;
      const endIndex = startIndex + this.state.quantityItemsOnPage;
      const visibleAlbums = this.props.albums.slice(startIndex, endIndex);

      return visibleAlbums;
  };

  selectPage = (currentPage) => {
    this.setState({ currentPage });
  }

  render() {     
    window.scrollTo(0, 0);       
    return (
      <>
        <div className="AlbumsList">
          <ul className="AlbumsList__list">
            {this.visibleAlbums.map(album => (
              <Link to={`albums/${album.id}`}>
                <li className="AlbumsList__item" key={album.id}>
                  <AlbumsCard album={album}/>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <Pagination 
          currentPage={this.state.currentPage} 
          visibleItems={this.visibleAlbums} 
          generalQuantityItems={this.props.albums.length}
          selectPage={this.selectPage}
        />
      </>
    );
  }
}