import './App.css';
import NavBars from './components/NavBars';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <NavBars />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            {/* <News setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="science" /> */}
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" key="general" />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="business" key="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="entertainment" key="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="general" key="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="health" key="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="science" key="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="sports" key="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} country="in" category="technology" key="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

{/* <Router>
  <Navbar />
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="*" element={<Errorpage />} />
  </Routes>
</Router> */}