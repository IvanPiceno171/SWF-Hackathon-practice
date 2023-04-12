import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <p>Test</p>
        <p>Test2</p>
        <p>Test3</p>
        <p>Test4</p>
        <p></p>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
