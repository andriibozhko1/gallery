import React, { Component } from "react";
import AlbumsList from "../AlbumsList/AlbumsList";
import Pagination from "../Pagination/Pagination";
import api from "../API/API";
import 'normalize.css'

export default class App extends Component {
  state = {
    albums: [],
    visibleAlbums: [],
    currentPage: 1,
    quantityItemsOnPage: 20,
  };

  async componentDidMount() {
    const albums = await api.getAlbums();
    this.setState({ albums }, () => this.setVisibleAlbums());
  }

  setVisibleAlbums = () => {
    this.setState(prevState => {
      const startIndex = (this.state.currentPage - 1) * this.state.quantityItemsOnPage;
      const endIndex = startIndex + this.state.quantityItemsOnPage;
      const visibleAlbums = prevState.albums.slice(startIndex, endIndex);

      return {
        visibleAlbums
      }
    });
  };


  selectPage = (currentPage) => {
    this.setState({ currentPage }, () => this.setVisibleAlbums())
  }


  render() {
    window.scrollTo(0,0);
    return (
      <>
        <AlbumsList
           albums={this.state.visibleAlbums}
        />
        <Pagination 
          currentPage={this.state.currentPage} 
          visibleAlbums={this.state.visibleAlbums} 
          generalQuantityAlbums={this.state.albums.length}
          selectPage={this.selectPage}
        />
      </>
    );
  }
}
