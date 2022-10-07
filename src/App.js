import logo from './logo.svg';
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {
  const buttonClick = () => {
    console.log("I clicked the button");
  }

  const onInputChange = (event) => {
    console.log(event.target.value);
  }

  const siblingsList = ["Leland", "Kelsie"];
  const siblingFunction = () => {
     var brotherCount = 0;
     var sisterCount = 0;
     siblingsList.forEach((sibling) => {
       if (sibling === "Leland") {
         brotherCount++;
       } else {
         sisterCount++;
       }
     })
     const siblingMap = siblingsList.map((sibling) => {
       return(<p key={sibling}>my sibling's name is {sibling}</p>);
     });
     return(
       <div>
         <p>I have {brotherCount} {brotherCount === 1 ? "brother" : "brothers"}</p>
         <p>I have {sisterCount} {sisterCount === 1 ? "sister" : "sisters"}</p>
         {siblingMap}
       </div>
     )
   }

   const lizzie = {
    name: "lizzie",
    age: 21,
    major: "geography",
    star_sign: "leo",
    birthday: {
      month: "August",
      day: "18",
    }
  }
  const camden = {
    name: "camden",
    age: 21,
    major: "geography",
    star_sign: "leo",
    birthday: {
      month: "August",
      day: "18",
    }
  }

  const divya = {
    name: "divya",
    age: 21,
    major: "computer science",
    star_sign: "gemini",
    birthday: {
      month: "February",
      day: "20",
    }
  }
  const myFriends = [lizzie, divya, camden];
  const friendMap = myFriends.map((friend) => {
    return(
      <div className="friend">
         <h1>{friend.name}</h1>
        <p>
          This is {friend.name}. They are {friend.age} years old. They are a {friend.major} major
        </p>
      </div>
    )
  })
 
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {<div className="friend-container"> 
        {friendMap}
        </div>}
        <button onClick={buttonClick}>Click me</button>
        <input type="text" onChange={onInputChange} />
      </header>
    </div>
  );
}

export default App;
