import React, { Component } from "react";
import API from "./utils/API";



function App() {

 const handleButtonClick = event => {
   event.preventDefault();

   API.getOrders().then(res => console.log(res))


 }

  return (
    <>
    <form>
      <label>Order details</label>
      <input></input>
      <button onClick={handleButtonClick}>Click for orders</button>
    </form>
    </>
  );
}


export default App;
