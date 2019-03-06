import React, { Component } from "react";
import "./Pagination.scss";

export default class Pagination extends Component {
  get paginationBtns() {    
    if (this.props.visibleItems.length > 0) {
      const quantityPaginationBtns = this.props.generalQuantityItems / this.props.visibleItems.length;
      const buttons = [];
      const start = Math.max(1, this.props.currentPage - 5);
      const end = Math.min(quantityPaginationBtns,this.props.currentPage + 5);

      for (let i = start; i <= end; i++) {        
        buttons.push(i);
      }      
      return buttons;    
    } else {
      return [];
    }
  }

  getCurrentPage = btn => () => this.props.selectPage(btn);

  changePages = currentPage => {
    return () => {
      let selectedPage = Math.max(
        1,
        Math.min(this.paginationBtns.length, currentPage)
      );
      this.props.selectPage(selectedPage);
    };
  };

  render() { 
    return (
      <div className="Pagination">
        <button
          className="Pagination__btns"
          onClick={this.changePages(this.props.currentPage - 1)}
        >
          Prev
        </button>
        {this.props.currentPage > 5 ? '...' : ''}
        {this.paginationBtns.map(btn => (
          <button
            className={`Pagination__btns ${
              btn === this.props.currentPage ? "Pagination__btns--active" : ""
            }`}
            key={btn}
            onClick={this.getCurrentPage(btn)}
          >
            {btn}
          </button>
        ))}      

        {this.paginationBtns.length > 5 ? '...' : ''}

        <button
          className="Pagination__btns"
          onClick={this.changePages(this.props.currentPage + 1)}
        >        
          Next
        </button>
      </div>
    );
  }
}
