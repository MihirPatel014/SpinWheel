import "./styles.css";

import React from "react";

class App extends React.Component {
  state = {
    name: "circle"
  };

  startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    });
  };
  stopRotation = () => {
    setTimeout(() => {
      this.setState({
        name: "circle start-rotate stop-rotate"
      });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="change-container">
          <div>
            <div className="arrow"></div>
            <ul className={this.state.name}>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  Nothing
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  100
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  200
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  300
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  400
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  500
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  600
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  700
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  800
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  900
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  1000
                </div>
              </li>
              <li>
                <div className="text" contenteditable="true" spellcheck="false">
                  11000
                </div>
              </li>
            </ul>
            <button
              onDoubleClick={this.stopRotation}
              onClick={this.startRotation}
              className="spin-button"
            >
              Spin
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
