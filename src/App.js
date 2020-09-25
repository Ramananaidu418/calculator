import React from "react";
import logo from "./logo.svg";
import "./App.css";
import KeyButton from "./Button.js";
class App extends React.Component {
  state = { text: "", ans: "" };

  handleButton = (btn) => {
    console.log(btn, "handle btn");

    if (btn === "=") {
      this.handleEqual();
    } else if (btn === "Ac") {
      this.handleAc();
    } else if (btn === "clear") {
      this.handleClear();
    } else if (
      this.state.text.length === 0 &&
      ["+", "-", "*", "%", "/"].includes(btn)
    ) {
      console.log("if1");
    } else {
      if (
        ["+", "-", "*", "%", "/"].includes(this.state.text.slice(-1)) &&
        ["+", "-", "*", "%", "/"].includes(btn)
      ) {
      } else {
        this.setState({ text: this.state.text + btn });
      }
    }
  };

  handleEqual = () => {
    try {
      this.setState({ ans: eval(this.state.text) });
    } catch {
      this.setState({ ans: "ERROR" });
    }
  };
  handleAc = () => {
    this.setState({ text: "", ans: " " });
  };
  handleClear = () => {
    let str = this.state.text;
    str = str.substring(0, str.length - 1);
    this.setState({ text: str, ans: "" });
  };
  addDecimal = (props) => {
    if (this.state.text.indexOf(".") === -1) {
      this.setState({ text: this.state.text + props });
    }
  };

  render() {
    return (
      <div className="mainBox">
        <div className="box">
          <div className="display">
            <div className="display1">{this.state.text}</div>
            <div className="display2">{this.state.ans}</div>
          </div>

          <div className="keyboard">
            {["Ac", "clear", "%", "/"].map((props) => (
              <KeyButton
                buttonFunction={() => this.handleButton(props)}
                element={props}
              />
            ))}
          </div>

          <div className="keyboard">
            {[7, 8, 9, "*"].map((props) => (
              <KeyButton
                buttonFunction={() => this.handleButton(props)}
                element={props}
              />
            ))}
          </div>
          <div className="keyboard">
            {[4, 5, 6, "-"].map((props) => (
              <KeyButton
                buttonFunction={() => this.handleButton(props)}
                element={props}
              />
            ))}
          </div>
          <div className="keyboard">
            {[1, 2, 3, "+"].map((props) => (
              <KeyButton
                buttonFunction={() => this.handleButton(props)}
                element={props}
              />
            ))}
          </div>
          <div className="keyboard">
            {[".", 0, "00", "="].map((props) => (
              <KeyButton
                buttonFunction={() => this.handleButton(props)}
                element={props}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* /* () => {
   return this.handleEqual("=")
}
addDecimal = (props) => {
  if (this.state.text.indexOf(".") === -1) {
    this.setState({ text: this.state.text + props });
    } */
}

{
  /* /////////////////// */
}

{
  /* <div className="keyboard"> 
            <div className="button1" onClick={this.handleAc}>
              AC
            </div>
            <div className="button1" onClick={this.handleClear}>
              clear
            </div>
            <div className="button1" onClick={() => this.handleButton("%")}>
              %
            </div>
            <div className="button1" onClick={() => this.handleButton("/")}>
              /
            </div>
          </div>
          <div className="keyboard">
            <div className="button" onClick={() => this.handleButton(7)}>
              7
            </div>
            <div className="button" onClick={() => this.handleButton(8)}>
              8
            </div>
            <div className="button" onClick={() => this.handleButton(9)}>
              9
            </div>
            <div className="button1" onClick={() => this.handleButton("*")}>
              *
            </div>
          </div>
          <div className="keyboard">
            <div className="button" onClick={() => this.handleButton(4)}>
              4
            </div>
            <div className="button" onClick={() => this.handleButton(5)}>
              5
            </div>
            <div className="button" onClick={() => this.handleButton(6)}>
              6
            </div>
            <div className="button1" onClick={() => this.handleButton("-")}>
              -
            </div>
          </div>
          <div className="keyboard">
            <div className="button" onClick={() => this.handleButton(1)}>
              1
            </div>
            <div className="button" onClick={() => this.handleButton(2)}>
              2
            </div>

            <div className="button" onClick={() => this.handleButton(3)}>
              3
            </div>
            <div className="button1" onClick={() => this.handleButton("+")}>
              +
            </div>
          </div>
          <div className="keyboard">
            <div className="button" onClick={() => this.handleButton(".")}>
              .
            </div>
            <div className="button" onClick={() => this.handleButton(0)}>
              0
            </div>
            <div className="button" onClick={() => this.handleButton("00")}>
              00
            </div>
            <div className="button1" onClick={this.handleEqual}>
              =
            </div>
         </div>*/
}

{
  /* //////////////////////////////////////////////////////////////////// */
}

{
  /* <div className = "keyboard"> 
             <KeyButton
              buttonFunction={() => this.handleButton(7)}
              element="7"
            />
            <KeyButton
              buttonFunction={() => this.handleButton(8)}
              element="8"
            />
            <KeyButton
              buttonFunction={() => this.handleButton(9)}
              element="9"
            />
            <KeyButton
              buttonFunction={() => this.handleButton("*")}
              element="*"
            /> 
          </div>*/
}
