

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

class ColorPicker extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() { 
    const swatchProps = {
      style: {
        width: '100px',
        height: '100px',
        border: '1px solid black',
        background: 'rgb(0, 0, 0)',
      },
    };


    return React.createElement(
      'div', null,
      React.createElement('div', swatchProps),
      React.createElement(LabeledSlider, { label: 'Red' }),
      React.createElement(LabeledSlider, { label: 'Green' }),
      React.createElement(LabeledSlider, { label: 'Blue' }),
    )
  }  
}





      
ReactDOM.render(
  React.createElement(ColorPicker),
    document.getElementById('root')
);