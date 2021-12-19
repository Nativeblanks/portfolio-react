import React from "react";

const Contact = () => (
  <div>
    <h1>Contact Page</h1>
    <form className="form">

<div className="name">

   <label for="firstName">Name</label>
   <input
        type="text"
        name="fullName"
        className="fullName"
        tabIndex="1"
   />
   <br />
   <label for="email">Email</label>
<input
     type="email"
     name="email"
     id="email"
     className="email"
     placeholder="example@corp.com"
     tabIndex="3"
/>
</div>
</form>
  </div>
);

export default Contact;
