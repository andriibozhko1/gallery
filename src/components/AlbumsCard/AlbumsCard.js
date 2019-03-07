import React from "react";
import propTypes from 'prop-types'
import './AlbumsCard.scss';

const AlbumsCard = ( props ) => {
  const { id, title } = props.album;  

  return (
    <div className="AlbumCard">
      <div className="AlbumCard__content">
        <div className="AlbumCard__id">Album #: { id }</div>
        <br />
        <div className="AlbumCard__title"> { title }</div>
      </div>
    </div>
  );
}

AlbumsCard.propTypes = {
  album: propTypes.object,
}


export default AlbumsCard;
