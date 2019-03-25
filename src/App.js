import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      imageURL : "",
      title    : "",
      items    : []
    }
  }

  changeImage = e => {
    this.setState({imageURL : e.target.value});
  }

  changeTitle = e => {
    this.setState({title : e.target.value});
  }

  add = () => {
    if (!this.state.title){
      alert("Please enter title");
      return;
    }
    if (!this.state.imageURL){
      alert("Please enter image URL");
      return;
    }
    if (!/(https?:\/\/.*\.(?:png|jpg))/i.test(this.state.imageURL)){
      alert("Please enter a valid image URL");
      this.setState({imageURL : ""});
      return;
    }
    this.setState({
      items : this.state.items.concat({id : new Date().getTime(),title : this.state.title, image : this.state.imageURL}),
      imageURL : "",
      title    : ""
    })
  }

  render() {
    return (
      <div className="main">
        <div>
          <input onChange={this.changeImage} value={this.state.imageURL} placeholder="Enter URL" style={{display:"table-cell", width:"100%", height:"25px"}} /><br />
          <input onChange={this.changeTitle} value={this.state.title} placeholder="Title" style={{display:"table-cell", width:"92.1%", height:"25px"}} />
          <button onClick={() => this.add()} className="button">Submit</button>
        </div>
        <div>
          {this.state.items.map(ele => (
            <div className="container">
              <p style={{padding:"3px"}}>{ele.title}</p>
              <img src={ele.image} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
