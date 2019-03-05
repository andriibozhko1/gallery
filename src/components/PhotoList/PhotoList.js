import React, { Component } from "react";

export default class PhotoList extends Component {
  get photo() {
    if (this.props.photo.length > 0) {
      return this.props.photo.filter(photo =>
        photo.albumId === +this.props.match.params.id ? photo : null
      );
    }
  }

  componentDidMount() {
    this.props.setVisibleItems('photo');
  }

  render() { 
    console.log(this.photo);
    return <div>12</div>;
  }
}
