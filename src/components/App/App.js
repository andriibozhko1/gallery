import React, { Component } from "react";
import PropTypes from 'prop-types'
import AlbumsList from "../AlbumsList/AlbumsList";
import PhotoList from "../PhotoList/PhotoList";
import Context from '../Context/Context'
import { Route } from "react-router-dom";
import api from "../API/API";
import "normalize.css";

export default class App extends Component {
  static propTypes = {
    albums: PropTypes.array.isRequired,
    photo: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
  };

  state = {
    albums: [],
    photo: [],
    tags: ["Frontend", "Backend", "Javascript", "React","Node.js","PHP","C#","Vue","Angular"],
    filteredPhoto: null,
    isLoading: true,
  };


  async componentDidMount() {
    const albums = await api.getAlbums();
    const photo = await api.getPhoto();
    photo.map(photo => (photo.tags = []));

    this.setState({ albums, photo, isLoading: false });
  }  

  updateData = photoData => {
    this.setState(({ photo }) => {
      photo[photoData.id - 1].tags.push(photoData);
      return {
        photo
      };
    });
  };

  render() {
    return (
      <>
      <Context.Provider value={{ 
        tags: this.state.tags,
        albums: this.state.albums,
        photo: this.state.photo,
        updateData: this.updateData,
        isLoading: this.state.isLoading,
       }}>
        <Route exact path="/" component={AlbumsList} />
        <Route path="/albums/:id" component={PhotoList}/>
      </Context.Provider>
      </>
    );
  }
}
