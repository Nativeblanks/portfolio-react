import React from 'react';

function Nav() {

  return (
<header>
  <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Aspiring Developer
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
      {categories.map((category) => (
  <li
    className="mx-1"
    key={category.name}
  >
    <span onClick={categorySelected} >
      {category.name}
      
    </span>
  </li>
))}
      </ul>
  </nav>
</header>
  );
}

const categories = [
    {
      name: "Projects",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "Passions", description: "Portraits of people in my life" },
    { name: "Activities", description: "Delicious delicacies" },
    {
      name: "Travel",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];


function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  
  {categories.map((category) => (
    <li
    className="mx-1"
    key={category.name}
  >
    <span>
      {category.name}
    </span>
  </li>
  ))}




export default Nav;