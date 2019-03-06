import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import AlbumsCard from "./AlbumsCard";
import Context from '../Context/Context'
import { Link } from "react-router-dom";
import "./AlbumsList.scss";
import Loader from '../Loader/Loader'

export default class AlbumsList extends Component {
  state = {    
    currentPage: 1,
    quantityItemsOnPage: 20,
    visibleAlbums: [],
  }

  albums = [];

  get visibleAlbums () {    
      const startIndex = (this.state.currentPage - 1) * this.state.quantityItemsOnPage;
      const endIndex = startIndex + this.state.quantityItemsOnPage;
      const visibleAlbums = this.albums.slice(startIndex, endIndex);

      return visibleAlbums;
  };

  selectPage = (currentPage) => {
    this.setState({ currentPage });
  }

  render() {     
    window.scrollTo(0, 0);
    return (
      <Context.Consumer>
          {(props) =>  {
            this.albums = props.albums;

            if(props.isLoading) {              
             return  <Loader />
            } else {
              return (
                <>
                  <div className="AlbumsList">
                    <ul className="AlbumsList__list">
                      {this.visibleAlbums.map(album => (
                        <Link key={album.id}  to={`albums/${album.id}`}>
                          <li className="AlbumsList__item">
                            <AlbumsCard album={album}/>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                  <Pagination 
                    currentPage={this.state.currentPage} 
                    visibleItems={this.visibleAlbums} 
                    generalQuantityItems={props.albums.length}
                    selectPage={this.selectPage}
                  />
                </>
              )
            }
          }}
      </Context.Consumer>
    );
  }
}