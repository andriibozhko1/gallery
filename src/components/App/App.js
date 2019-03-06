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
    tags: ['Frontend', 'Backend','Javascript','React'],
    filteredPhoto: null,
  }

  async componentDidMount() {
    const albums = await api.getAlbums();
    const photo = await api.getPhoto();
    photo.map(photo => photo.tags = []);

    this.setState({ albums, photo })
  }

  updateData = (photoData) => {
    this.setState(({ photo }) => {
      photo[photoData.id - 1].tags.push(photoData);
      return {
        photo
      }
    })
  }

  render() {
    return (
      <>       
        <Switch>
          <Route exact path="/" render={() => ( <AlbumsList albums={this.state.albums}/>)}/>
          <Route path="/albums/:id" render={(props) => (
            <PhotoList 
              {...props} 
               photo={ this.state.photo }
               tags={this.state.tags} 
               updateData={this.updateData} />
             )} />
          <Route exact path="/" render={() => ( <AlbumsList albums={this.state.albums}/>)}/>
        </Switch>
      </>
    );
  }
}
