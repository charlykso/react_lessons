import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "Welcom to my first react app";
  // const likes = 100;
  // const link = "https://www.google.com";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
