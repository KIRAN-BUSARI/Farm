import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import About from "./components/About";
import Home from "./components/Home";
import Communities from "./components/Communities";
import Support from "./components/Support";
import Store from "./components/Store";
import JoinNow from "./components/JoinNow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/support' element={<Support />} />
          <Route path='/Store' element={<Store />} />
          <Route path='/communities' element={<Communities />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/join' element={<JoinNow />}></Route>
          {/* <Route path='/signin' element={<SignIn />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
