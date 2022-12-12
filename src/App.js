import React from "react";

import {Header, SearchBar, PostList, Footer, Profile, SignUp} from "./components";

import './data'
import './profileData'
import './commentsData'

function App() {
    console.log(new Date());
    return (
        <div className="wrapper">
            <SignUp/>
            <Header/>
            <SearchBar/>
            <Profile/>
            <PostList/>
            <Footer/>
        </div>
    );
}

export default App;
