class App extends React.Component {
  constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = { input: '' };
    this.handleClick = this.handleClick.bind(this);
    window.document.addEventListener('keydown', e => {
      let key = e.key.toUpperCase();
      document.getElementById(key).play();
      for (const allBtns of document.querySelectorAll('button')) {
        if (allBtns.innerText === key) {
          document.getElementById('display').innerText = allBtns.id;
        }
      }
    });
  }

  handleClick(event) {
    const id = event.target.id;
    const sound = event.target.innerText;

    this.setState({
      input: id });

    document.getElementById(sound).play();
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { className: "pad" }, /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Heater 1", onClick: this.handleClick }, "Q", /*#__PURE__*/React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", className: "clip", id: "Q" })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", id: "Heater 2", onClick: this.handleClick }, "W", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", className: "clip", id: "W" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Heater 3", onClick: this.handleClick }, "E", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", className: "clip", id: "E" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Heater 4", onClick: this.handleClick }, "A", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", className: "clip", id: "A" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Clap", onClick: this.handleClick }, "S", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", className: "clip", id: "S" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Open-HH", onClick: this.handleClick }, "D", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", className: "clip", id: "D" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Kick-n'-Hat", onClick: this.handleClick }, "Z", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", className: "clip", id: "Z" }, /*#__PURE__*/
      React.createElement("a", { href: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" }, "Download audio"))), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", id: "Kick", onClick: this.handleClick }, "X", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", className: "clip", id: "X" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Closed-HH", onClick: this.handleClick }, "C", /*#__PURE__*/
      React.createElement("audio", { src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", className: "clip", id: "C" }))), /*#__PURE__*/


      React.createElement("div", { id: "display" }, this.state.input)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('appli'));