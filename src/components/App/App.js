import React, { Component } from "react";
import AlbumsList from "../AlbumsList/AlbumsList";
import PhotoList from "../PhotoList/PhotoList";
import Pagination from "../Pagination/Pagination";
import { Switch, Route } from "react-router-dom";
import api from "../API/API";
import 'normalize.css'

export default class App extends Component {
  state = {
    albums: [],
    photo: [],
    visibleItems: [],
    currentPage: 1,
    quantityItemsOnPage: 20,
    generalQuantityAlbums: 0,
    whatToRender: 'albums',
  };

  setPaginationRender = (whatToRender) => {
    this.setState({
      whatToRender
    }, () => this.setVisibleItems())
  }

  async componentDidMount() {
    const albums = await api.getAlbums();
    const photo = await api.getPhoto();
    
    this.setState({ 
      albums,
      photo,
    }, () => this.setVisibleItems());
  }

  setVisibleItems = () => {    
    this.setState(prevState => { 
      const startIndex = (this.state.currentPage - 1) * this.state.quantityItemsOnPage;
      const endIndex = startIndex + this.state.quantityItemsOnPage;
      const visibleItems = prevState[this.state.whatToRender].slice(startIndex, endIndex);

      return {
        visibleItems,
        generalQuantityAlbums: this.state[this.state.whatToRender].length
      }
    });
  };


  selectPage = (currentPage) => {
    this.setState({ currentPage }, () => this.setVisibleItems())
  }


  render() {
    window.scrollTo(0,0);
    return (
      <>
        <Switch >
          <Route exact path="/" render={() => <AlbumsList albums={this.state.visibleItems} setItemsForPagination={this.setItemsForPagination} />} />
          <Route path="/albums/:id" render={(props) => <PhotoList {...props}  photo={ this.state.photo } setVisibleItems={this.setPaginationRender} />} />
        </Switch>
        <Pagination 
          currentPage={this.state.currentPage} 
          visibleAlbums={this.state.visibleItems} 
          generalQuantityAlbums={this.state.generalQuantityAlbums}
          selectPage={this.selectPage}
        />
      </>
    );
  }
}
