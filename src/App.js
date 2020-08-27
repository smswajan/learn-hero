import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Courses from "./Components/Courses/Courses";
import Header from "./Components/Header/Header";

function App() {
    return (
        <div>
            <Header />
            <Courses />
        </div>
    );
}

export default App;
