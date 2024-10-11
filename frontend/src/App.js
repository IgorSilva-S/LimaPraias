import './index.css';
import SideBar from './Components/SideBar';
import Create from './Components/Create/create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" component={Create} />
          <Route path="/update" component={Login} />
        </Routes>
      </Router>
      <SideBar/>
      <Create/>
    </>
  );
}

export default App;
