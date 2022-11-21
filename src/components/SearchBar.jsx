import React from "react";

import searchBarImg from "../assets/images/search-bar.png";

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-bar__left">
                <div className="wrapper">
                    <h1>Here should be a Search Bar</h1>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">Think like your customer</div>
                            <div className="title-item">Think strategically</div>
                            <div className="title-item">Think creatively</div>
                            <div className="title-item">Think results</div>
                            <div className="title-item">Think digital</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-bar__right">
                <div className="img-background"/>
                <img className="img" src={searchBarImg} alt="Search Bar Img"/>
            </div>
        </div>
    );
}

export default SearchBar;