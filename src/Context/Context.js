import React, { Component } from "react";
import api from "../API/API";

const Context = React.createContext();

export class ContextProvider extends Component {
  state = {
    albums: [],
    photo: [],
    tags: [
      "Frontend",
      "Backend",
      "Javascript",
      "React",
      "Node.js",
      "PHP",
      "C#",
      "Vue",
      "Angular"
    ],
    filteredPhoto: null,
    isLoading: true
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
    const { children } = this.props;
    return (
      <Context.Provider
        value={{
          tags: this.state.tags,
          albums: this.state.albums,
          photo: this.state.photo,
          updateData: this.updateData,
          isLoading: this.state.isLoading
        }}>
          { children }
        </Context.Provider>
    );
  }
}

export const ContextConsumer = Context.Consumer;