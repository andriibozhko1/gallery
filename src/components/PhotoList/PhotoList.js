import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import './PhotoList.scss';

export default class PhotoList extends Component {
  state = {    
    currentPage: 1,
    quantityItemsOnPage: 10,    
  }

  get filteredPhoto () {    
    const filteredPhoto = this.props.photo.filter(photo => (
      photo.albumId === +this.props.match.params.id ? photo : null
    ))

    return filteredPhoto;
  };

  get visiblePhoto () {    
    const startIndex = (this.state.currentPage - 1) * this.state.quantityItemsOnPage;
    const endIndex = startIndex + this.state.quantityItemsOnPage;
    const visiblePhoto = this.filteredPhoto.slice(startIndex, endIndex);

    return visiblePhoto;
  };

  selectPage = (currentPage) => {
    this.setState({ currentPage });
  }

  render() {     
    return (
      <>  
          <div className="PhotoList">
            <ul className="PhotoList__list">
              {this.visiblePhoto.map(photo => {
                console.log(photo);

                return (
                  <li className="PhotoList__item">
                    <div className="PhotoList__photo-card">
                      <div className="PhotoList__photo-card-img-block">
                        <img className="PhotoList__photo-card-img" src={photo.url} alt={photo.title}/>
                      </div>
                      <div className="PhotoList__photo-card-title">
                        { photo.title }
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <Pagination 
            currentPage={this.state.currentPage} 
            visibleItems={this.visiblePhoto} 
            generalQuantityItems={this.filteredPhoto.length}
            selectPage={this.selectPage}
          />
      </>
    )
  }
}
