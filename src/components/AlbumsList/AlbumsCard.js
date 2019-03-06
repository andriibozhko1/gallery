import React from "react";


const AlbumsCard = ( props ) => {
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
export default AlbumsCard;
