import React, { Component } from "react";
import AlbumsList from "../AlbumsList/AlbumsList";
import PhotoList from "../PhotoList/PhotoList";
import { Switch, Route } from "react-router-dom";
import api from "../API/API";
import "normalize.css";

export default class App extends Component {

  state = {
    albums: [],
    photo: [],
  }

  async componentDidMount() {
    const albums = await api.getAlbums();
    const photo = await api.getPhoto();

    this.setState({ albums, photo })
  }



  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" render={() => ( <AlbumsList albums={this.state.albums}/>)}/>
          <Route path="/albums/:id" render={(props) => <PhotoList {...props}  photo={ this.state.photo } />} />
        </Switch>
      </>
    );
  }
}
