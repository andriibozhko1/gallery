import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import PhotoCard from "./PhotoCard"
import { Link } from "react-router-dom";
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
              {this.visiblePhoto.map(photo => 
              (                  
               <li key={photo.id} className="PhotoList__item">
                  <PhotoCard 
                    photoData={ photo } 
                    tags={this.props.tags}
                    updateData={this.props.updateData}  
                  />
               </li>
              ))}
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
