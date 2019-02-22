
/**
 * This is the functional component implementation of a labeled slider with a readout.
 * 
 * @param {Object} props - the props of the component
 */
const LabeledSlider  = (props) => {
  // the properties that determine the appearance of the label div
  const labelProps = {
    style: {
      display: 'inline-block',
      width: '50px',
      'text-align': 'left',
    },
  };

  // return the hierarchy of elements that make up the slider, label and readout
  return React.createElement('div', null, 
    React.createElement('div', labelProps, `${props.label}:`),
    React.createElement('input',{
      type: 'range',
      min: 0,
      max: 255,
      value: props.value,
      onChange: (event) => props.valueChange(parseInt(event.target.value)),
    }),
    React.createElement('span', null, props.value),
  );
}

/**
 * The ColorPicker component implements the full color picker with updating swatch
 * 
 * This component doesn't take any props.
 */
class ColorPicker extends React.Component {
  constructor(props){
    super(props);

    // initialize the state of the component
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    }
  }

  /**
   * Render the component when the state changes
   */
  render() { 
    // styling for the swatch
    const swatchProps = {
      style: {
        width: '100px',
        height: '100px',
        border: '1px solid black',
        background: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
      },
    };

    // return the component hierarchy
    // notice how we push the state down to the sliders as well as callbacks so we
    // can update the state as they change.
    return React.createElement(
      'div', null,
      React.createElement('div', swatchProps),
      React.createElement(LabeledSlider, { 
        label: 'Red', 
        value: this.state.red,
        valueChange: (value) => this.setState({ red: value }) }),
      React.createElement(LabeledSlider, { 
        label: 'Green',
        value: this.state.green,
        valueChange: (value) => this.setState({ green: value }) }),
      React.createElement(LabeledSlider, { 
        label: 'Blue', 
        value: this.state.blue,
        valueChange: (value) => this.setState({ blue: value }) }),
    )
  }  
}





      
ReactDOM.render(
  React.createElement(ColorPicker),
    document.getElementById('root')
);