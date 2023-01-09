import './App.css';
import Home from "./components/Home";
import ContactState from "./context/ContactState";

function App() {
  return (
    <>
    <ContactState>
    <div className="App">
      <Home/>
    </div>
    </ContactState>
    </>
  );
}

export default App;
