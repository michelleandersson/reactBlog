import React, { Component } from 'react'; 
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'; 
import HomePage from './pages/homePage'; 
import AboutPage from './pages/AboutPage'; 
import ArticleList from './pages/ArticleList'; 
import ArticlePage from './pages/ArticlePage'; 
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component ={HomePage} exact />
        <Route path="/about" component ={AboutPage} />
        <Route path="/articles-list" component ={ArticleList} />
        <Route path="/article" component ={ArticlePage} />
      </div>
    </Router>
  );
}

export default App;
