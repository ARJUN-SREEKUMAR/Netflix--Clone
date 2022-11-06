import React from "react";
import Header from "./components/Header";
import './app.css';
import Banner from "./components/Banner";
import Poster from "./components/poster";
import {apiKey} from './constatnts/constants'
export default function App(){
 

  return (
    <div>
    <Header />
    <Banner />
    <Poster titile='Popular on Netflix ' type={`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213`}/>
    <Poster  titile='Action' type={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`}/>
    </div>
    
  );
};
