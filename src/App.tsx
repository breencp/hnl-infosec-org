import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Error404 from "./components/Error404";

function App() {

    return (
        <div className="bg-black text-white min-h-screen">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
