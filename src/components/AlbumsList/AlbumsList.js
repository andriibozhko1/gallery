import React, { Component } from 'react'
import './AlbumsList.scss'

export default class AlbumsList extends Component {
  render() {
    return (
      <div className="AlbumsList">
        <ul className="AlbumsList__list">
          {this.props.albums.map(album => (
            <li className="AlbumsList__item" key={album.id}>                                     
              <div className="AlbumsList__album-card">              
                <div className="AlbumsList__content">
                  <div className="AlbumsList__id">Album #: { album.id }</div><br />
                  <div className="AlbumsList__album-card-tittle"> { album.title }</div>
                </div>
              </div>                            
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
