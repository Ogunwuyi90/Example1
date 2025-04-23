import React from "https://esm.sh/react@19";
import ReactDOM from "https://esm.sh/react-dom@19/client";
const { useState } = React


 function App() {
  let [jokeAnswer, setJokeAnswer] = useState("");
  
   function reveal1(){
     console.log("Between you and me, something smells")
     setJokeAnswer("Between you and me, something smells");
   }
   
  function reveal2(){
     console.log("A carrot")
         setJokeAnswer("A carrot");


  } 
   
   
  /* function jokeReveal(){
  const [isClicked, setIsClicked] = useState(false);
 const handleClick = () => {
        setIsClicked(!isClicked);
      };
      return (
        <div>
          <button onClick={handleClick}>Toggle Content</button>
          {isClicked && <p>This content is shown when the button is clicked.</p>}
        </div>
      );
    }
    */ 
   
  return (
    <div className="App">
      <h1>Jokes of the Day!</h1>
      <img
        alt="people laughing"
src="https://media.newyorker.com/photos/655e365e5d4e798850508bfd/master/w_2560%2Cc_limit/Jokes_final.jpg"
      />
      <h2>Click the buttons and check the console to see the answers to these different jokes 👀</h2>
      <button onClick={reveal1}>What did the left eye say to the right eye?</button>
      {/* Between you and me, something smells */}
      <button onClick={reveal2}>What's orange and sounds like a parrot?{/* A carrot */}</button>
      <p className="jokes"> {jokeAnswer}</p>
    </div>
  );
}

//Renders your code to the page
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);