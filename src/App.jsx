import Home from "./pages/Home";
import Header from "./pages/Header";
import About from "./pages/About";
import Studio from "./pages/Studio";

function App() {
    return (
        <div>
            <Header />
            <Home id="home" />
            <About id="about" />
            <Studio id="studio" />
            <div></div>
        </div>
    );
}

export default App;