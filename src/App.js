import "./App.css";
import Navbar from "./myComponents/Navbar";
import News from "./myComponents/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
    const [progress, setProgress] = useState(0);
    const apiKey = process.env.REACT_APP_API_KEY;
    return (
        <Router>
            <div className="App">
                <Navbar />
                <LoadingBar color="#0d6efd" progress={progress} />

                <h2 style={{ textAlign: "center" }} className="bg-dark text-primary pb-3">
                    The News Glory - Top Headlines
                </h2>
                <Switch>
                    <Route exact path="/">
                        <News apiKey={apiKey} setProgress={setProgress} key="home" country="in" pageSize={8} />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/business">
                        <News apiKey={apiKey} setProgress={setProgress} key="business" country="in" category="business" pageSize={8} />
                    </Route>

                    <Route exact path="/entertainment">
                        <News apiKey={apiKey} setProgress={setProgress} key="entertainment" country="in" category="entertainment" pageSize={8} />
                    </Route>

                    <Route exact path="/general">
                        <News apiKey={apiKey} setProgress={setProgress} key="general" country="in" category="general" pageSize={8} />
                    </Route>

                    <Route exact path="/health">
                        <News apiKey={apiKey} setProgress={setProgress} key="health" country="in" category="health" pageSize={8} />
                    </Route>

                    <Route exact path="/science">
                        <News apiKey={apiKey} setProgress={setProgress} key="science" country="in" category="science" pageSize={8} />
                    </Route>

                    <Route exact path="/sports">
                        <News apiKey={apiKey} setProgress={setProgress} key="sports" country="in" category="sports" pageSize={8} />
                    </Route>

                    <Route exact path="/technology">
                        <News apiKey={apiKey} setProgress={setProgress} key="technology" country="in" category="technology" pageSize={8} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
