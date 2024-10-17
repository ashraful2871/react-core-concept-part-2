import "./App.css";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Player";
import Users from "./User";

function App() {
  function clickMe() {
    alert("Button Clicked");
  }
  const button2Click = () => {
    alert("button 2 clicked");
  };
  const addFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h2>React core concept part 2</h2>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={clickMe}>click me</button>
      <button onClick={button2Click}>button 2 click</button>
      <button onClick={() => addFive(3)}>button 3</button>
      <button
        onClick={() => {
          alert("Fourth Click");
        }}
      >
        button 4
      </button>
    </>
  );
}

export default App;
