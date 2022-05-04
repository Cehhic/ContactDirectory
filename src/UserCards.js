import React from "react";
import "./UserCards.css"
import { FcAbout} from "react-icons/fc";

function UserCards(list){
    var randomColor = Math.floor(Math.random()*16777215).toString(16)
    return(
        <div className ="user-card">
            
        <img
        src={`https://ui-avatars.com/api/?name=${list.user.name}?set=set2&color=FFFFFF&size=180x180&background=2867B2`}
         />
        
        
        <p className="Name"> <FcAbout/> <b> {list.user.name}: </b> </p>
        <p className="Company"> <b>Works at:</b> {list.user.company.name}.</p>
        <p className="Username"> <b>Username:</b> {list.user.username}. </p>
        <p className="Email" >  <b>Email: </b> {list.user.email}. </p>
        <p className="Address"> <b>Address: </b> {list.user.address.suite} {list.user.street} {list.user.address.city} {list.user.address.zipcode}. </p> 
        <p className="Phone">  <b> PhoneNo: </b> {list.user.phone}. </p>
        <p className="Website"> <b> Website: </b> <a href={list.user.website}> {list.user.website}. </a> </p>
        
         </div>
    );
}
export default UserCards;