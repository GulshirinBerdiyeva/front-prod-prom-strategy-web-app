import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import searchBarImg from "../assets/images/home-intro.png";

function SearchBar() {
    return (
        <div className="search-bar">
            <div className="search-bar__left">
                <div className="wrapper">
                    <div className="search-input-wrapper">
                        <input type="text" placeholder="Search by the title ..."/>
                        <div className="search-icon">
                            <SearchIcon/>
                        </div>
                    </div>
                    <div className="title">
                        <div className="title-wrapper">
                            <div className="title-item">Think strategically</div>
                            <div className="title-item">Think like your customer</div>
                            <div className="title-item">Think creatively</div>
                            <div className="title-item">Think results</div>
                            <div className="title-item">Think digital</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-bar__right">
                {/*<div className="img-background"/>*/}
                <img className="img" src={searchBarImg} alt="Search Bar Img"/>
            </div>
        </div>
    );
}

export default SearchBar;