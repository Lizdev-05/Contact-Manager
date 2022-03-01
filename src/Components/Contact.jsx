import React from "react";
import { Link } from "react-router-dom";
import {Navigate} from "react-router-dom";
class Contact extends React.Component {
  state ={
    name: "",
    email: "",
    PhoneNumber: "",
  };
   add = (e) =>{
     e.preventDefault();
     if (this.state.name === "" || this.state.email === "" || this.state.PhoneNumber ==="" ){
       alert("The fields are mandatory!")
       return
     }
     this.props.addContactHandler(this.state);
     this.setState({name: "", email: "", PhoneNumber: "",})
     if (this.state.name === true && this.state.email === true &&  this.state.PhoneNumber === true) {
      return <Navigate to="/" />;
    }
   }
  render() {
    return (
      <div className="container">
        <h1>Add Contact</h1>
        <form onSubmit={this.add}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
             Full name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputText1"
              aria-describedby="emailHelp"
              value={this.state.name}
              onChange={ (e) => this.setState({name: e.target.value})}
            />
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={ (e) => this.setState({email: e.target.value})}
            /> 
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputNumber1"
              aria-describedby="emailHelp"
              value={this.state.PhoneNumber}
              onChange={ (e) => this.setState({PhoneNumber: e.target.value})}
            />
          </div>
       <button type="submit" class="btn btn-primary">
            Add
          </button>
          <Link to ="/"> 
     <button className='ui right floated primary button'>Contact List</button> </Link>
         
        </form>
      </div>
    );
  }
}

export default Contact;
