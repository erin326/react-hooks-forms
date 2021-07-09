import React, { useState } from "react";

function Form(props) {
  return (
    <form>
      <input
      type="text"
      onChange={props.handleFirstNameChange}
      value={props.firstName}
      >
      </input>
      <input
      type="text"
      onChange={props.handleLastNameChange}
      value={props.lastName}
      >
      </input>
      <button type="submit">Submit</button>
    </form>

  )

}


export default Form;
