import React from "react";
import user from "../images/user.jpg";

const ContactCard = (props) => {
  const { id, name, email, PhoneNumber } = props.contact;
  return (

    //     <div className="container">
    //       <table class="ui celled table">
    //       <tr>
    //       <td data-label="Name" className="col-4"><img className="ui avatar image" src={user} alt="user" />{name}</td>
    //       <td data-label="Age" className="col4">{email}</td>
    //       <td data-label="Number" className="col-2">{PhoneNumber}</td>
    //       <td data-label="icon" className="col-2"><i className="trash alternate outline floated icon red"></i></td>

    // </tr>
    //       </table>
    //     </div>

    
    <div className="item container">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{PhoneNumber}</div>
      </div>
      <i
        className="trash alternate outline floated icon right floated"
        style={{ color: "red", marginTop: "15px"}}
        onClick={(() => props.clickHandler(id))}
      ></i>
    </div>
    
  );
};

export default ContactCard;
