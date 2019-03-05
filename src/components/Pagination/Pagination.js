import React, { Component } from "react";

export default class Pagination extends Component {
  get paginationBtns() {
    if (this.props.visibleAlbums.length > 0) {
      const quantityPaginationBtns = this.props.generalQuantityAlbums / this.props.visibleAlbums.length;
      const paginationBtns = [];

      for(let i = 1; i <= quantityPaginationBtns; i++) {
        paginationBtns.push(i);
      }
      return paginationBtns;
    } else {
      return [];
    }
  }

  getCurrentPage = (btn) => {
    return () => {
      this.props.selectPage(btn);
    }
  }

  changePages = (currentPage) => {    
    return () => {
      let selectedPage = Math.max(1, Math.min(this.paginationBtns.length, currentPage))
      this.props.selectPage(selectedPage)
    }
  }


  render() {    
    return (
      <>
        <button onClick={this.changePages(this.props.currentPage - 1)}/>
        {this.paginationBtns.map(btn => (
          <button className="Pagination__btns" key={ btn } onClick={this.getCurrentPage(btn)}>{ btn }</button>
        ))}
        <button onClick={this.changePages(this.props.currentPage + 1)}/>
      </>
    )
  }
}
