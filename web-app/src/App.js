import './App.css';
import display from './display.svg';
import logo from './logo.png';
import CTA from './Rectangle 11.png';
import sidebox from './Rectangle 1.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} id="logo" alt="logo"/>
                <h1 id="company-name">KNOT Web</h1>
                <img src={display} id="display" alt="logo"/>
                <div id="side-box-div">
                    <a href="https://www.linkedin.com/in/seanpecor/" target="_blank" rel="noreferrer"><div><img src={sidebox} id="box-1" alt="top side box"></img></div></a>
                    <a href="https://www.linkedin.com/in/seanpecor/" target="_blank" rel="noreferrer"><img src={sidebox} id="box-2" alt="top side box"></img></a>
                    <a href="https://www.linkedin.com/in/janahan-sivaneswaran/" target="_blank" rel="noreferrer"><img src={sidebox} id="box-3" alt="top side box"></img></a>
                </div>
                <a id="call-to-action" href="https://www.linkedin.com/in/seanpecor/" target="_blank" rel="noreferrer"><img src={CTA} alt="call-to-action"></img></a>
                <div id="cta-text">let's work.</div>
                <div id="side-box-1-text">web dev/design</div>
                <div id="side-box-2-text">seo</div>
                <div id="side-box-3-text">ad marketing</div>
                <div id="carousel">
                    <div id="slide-1">
                        <div id="slide-1a">
                            Enjoy the benefits of our creative expertise.
                        </div>
                        <div id="slide-1b">
                            <div id="slide-1b1">We'll be the architects of your digital future.</div>
                            <div id="slide-1b2">
                                Boost your business and get your name out there.
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;