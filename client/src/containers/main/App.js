import Chats from "../chat";
import Header from "../header/header";
import Navbar from "../navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar/>
      <div className="main-body">
        <Header/>
        <Chats />
      </div>
    </div>
  );
}

export default App;
