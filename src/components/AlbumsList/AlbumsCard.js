import React from "react";

export default function AlbumsCard(props) {
  const { id, title } = props.album;

    return (
      <div className="AlbumsList__album-card">
        <div className="AlbumsList__content">
          <div className="AlbumsList__id">Album #: { id }</div>
          <br />
          <div className="AlbumsList__album-card-tittle"> { title }</div>
        </div>
      </div>
    );
}
