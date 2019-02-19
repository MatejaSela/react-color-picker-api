

class LabeledSlider extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {

    const labelProps = {
      style: {
        display: 'inline-block',
        width: '50px',
        'text-align': 'left',
      },
    };

    return React.createElement('div', null, 
      React.createElement('div', labelProps, `${this.props.label}:`),
      React.createElement('input',{
        type: 'range',
        min: 0,
        max: 255,
        value: this.state.value,
        onChange: event => this.setState({ value: parseInt(event.target.value) }),
      }),
      React.createElement('span', null, this.state.value),
    );
  }
}
      
ReactDOM.render(
  React.createElement(LabeledSlider, {label: 'red'}, null),
    document.getElementById('root')
);