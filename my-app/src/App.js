import React from "react";
import pic from "./imgs/pic.png";
import "./styles.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Kemly Amal",
      bio: "I just love learn and play ",
      imgSrc: pic,
      profession: "Developer"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <p>{this.state.Person.profession}</p>
            <img src={this.state.Person.imgSrc} alt="Naruto"></img>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
