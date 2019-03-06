import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
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
              <li className="AlbumsList__item" key={album.id}>
                <div className="AlbumsList__album-card">
                  <div className="AlbumsList__content">
                    <div className="AlbumsList__id">Album #: {album.id}</div>
                    <br />
                    <div className="AlbumsList__album-card-tittle">
                      {" "}
                      {album.title}
                    </div>
                  </div>
                </div>
              </li>
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