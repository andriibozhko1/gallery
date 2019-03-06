import React, { Component } from "react";
import Pagination from "../Pagination/Pagination";
import PhotoCard from "./PhotoCard"
import Header from "../Header/Header"
import './PhotoList.scss';

export default class PhotoList extends Component {
  state = {    
    currentPage: 1,
    quantityItemsOnPage: 10,   
    filteredByTagName: null, 
  }

  get filteredPhoto () {    
    let filteredPhoto = this.props.photo.filter(photo => (
      photo.albumId === +this.props.match.params.id ? photo : null
    ))

    if(this.state.filteredByTagName) {
      var x = filteredPhoto.filter(photo => {
        if(photo.tags.length > 0) {
          return photo.tags.find(tagData => {
            if(tagData.tag === this.state.filteredByTagName) {
              return tagData
            }
          })
        }
      })
      return x;
    }    
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


  setFilterTag = (tag) => {  
    if(tag === 'null') {
      this.setState({
        filteredByTagName: null,
      })
      return;
    } 

    this.setState({
      filteredByTagName: tag,
    })
  }

  render() {     
    console.log(this.state);
    return (
      <>  
        <Header tags={this.props.tags} setFilterTag={this.setFilterTag} />
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
