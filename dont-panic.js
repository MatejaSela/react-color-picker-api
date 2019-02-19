

class Message extends React.Component {

  render() {
    return React.createElement('h1', null, "Don't Panic");
  }
}
    
ReactDOM.render(
  React.createElement(Message, null, null),
  document.getElementById('root')
);