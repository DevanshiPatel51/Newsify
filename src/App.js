import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <LoadingBar
              color="white"
              progress={this.state.progress}
            />
            <Routes>
              <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Home" pageSize={6} country="us" category="General" />}></Route>
              <Route exact path="/Business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={6} country="us" category="Business" />}></Route>
              <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={6} country="us" category="Entertainment" />}></Route>
              <Route exact path="/Technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={6} country="us" category="Technology" />}></Route>
              <Route exact path="/Science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={6} country="us" category="Science" />}></Route>
              <Route exact path="/Sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={6} country="us" category="Sports" />}></Route>
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}



