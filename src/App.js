import React from "react";

import {Header, SearchBar, Post, PostList, Footer} from "./components";

import './data'

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <SearchBar/>
            <Post/>
            <PostList/>
            <Footer/>
        </div>
    );
}

export default App;
