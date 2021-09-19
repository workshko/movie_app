import React from "react";

function Food({favorite}){
  console.log(favorite);

  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div className="App">
    <h1>hello React!!</h1>
    <Food favorite="kimchi"/>
    <Food favorite="ramen"/>
    <Food favorite="sanmgiosal"/>
    <Food favorite="사랑해"/>
    </div>
  );
}

export default App;
