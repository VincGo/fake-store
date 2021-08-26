import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import List from "./view/List";
import Edit from "./view/Edit";

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Route path={"/"} component={List} exact/>
            <Route path={"/edit/:id"} component={Edit}/>
        </BrowserRouter>
    );
}

export default App;
