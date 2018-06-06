import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

export default class ColorSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      min: this.props.min,
      max: this.props.max,
      values: this.props.thresholds,
      isDragging: [
        false, false, false, false
      ],
      colors: this.props.colors
    }
     // colors: ["red", "#FF9910", "#FFFB00", "#4BDD33", "blue"]
    this.segments = [];
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  componentDidMount() {
    var dimensions = [];
    var colorBars = this.segments;
    if (colorBars) {
      for (let i = 0; i < colorBars.length; i++) {
        let segment = colorBars[i].getBoundingClientRect();
        dimensions[i] = segment.width;
      }
    }
    this.setState({dims: dimensions});
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
        {
            name: nextProps.name,
            min: nextProps.min,
            max: nextProps.max,
            values: nextProps.thresholds,
            colors: nextprops.colors
        });
  }

  handleMouseDown(e, i) {
    console.log("in handleMouseDown on pin " + i);
    const isDrag = this.state.isDragging;
    isDrag[i] = true;
    this.setState({isDragging: isDrag});

    e.stopPropagation();
    e.preventDefault();
  }

  handleMouseUp(e, i) {
    console.log(" in handleMouseUp on pin " + i);
    const isDrag = this.state.isDragging;
    isDrag[i] = false;
    this.setState({isDragging: isDrag});

    e.stopPropagation();
    e.preventDefault();
  }

  handleMouseMove(e, i) {
    console.log(" in handleMouseMove on pin " + i);
    const {min, max} = this.props;
    var dimensions = [];
    var totalLeft = 0;
    var totalRight = 0;
    var totalWidth = 0;
    var colorBars = this.segments;
    if (colorBars) {
      for (let i = 0; i < colorBars.length; i++) {
        let segment = colorBars[i].getBoundingClientRect();
        if (i == 0) {
          totalLeft = segment.left;
        }
        if (i == colorBars.length - 1) {
          totalRight = segment.right;
        }
        dimensions[i] = segment.width;
        totalWidth += segment.width;
      }
    }
    let ratio = (e.pageX - totalLeft) / totalWidth;
    console.log("pin "+i+" e.pageX "+e.pageX + " ratio "+ratio);
    if (this.state.isDragging[i]) {

        let val = ratio * (max - min) + min;
        console.log("new val based on the ratio " + val);
        /*let numDecimals = decimalPlaces(max);
        let n = numDecimals;
        if(n >=5)
          n = 5;
        if(max < 1 || max-min < 10) {
          val = roundToN(val, n);
        } else {
          val = Math.round(val);
        }*/
        //  let maxVal = ((e.clientX - rLeft) / (right - rLeft)) * (max-min) + min;
        //  let maxVal = ((e.clientX - left) / (right - left)) * (max-min) + min;
        if (val < min)
            val = min;
        if (val > max)
            val = max;
        var vals = this.state.values;
        vals[i + 1] = val;
        console.log(" isDragging true for pin " + i + " setState new val " + val);

        this.setState({values: vals, dims: dimensions});
    }
    e.stopPropagation();
    e.preventDefault();
  }

  renderPin(i) {
    if (i < this.state.colors.length - 1) {
      var rightPos = 0 - 6;
      const pinStyle2 = {
        position: 'absolute',
        top: 0,
        right: rightPos,
        display: "inline-block",
        backgroundColor: 'grey',
        borderRadius: "50%",
        width: 12,
        height: 12,
        zIndex: 2
      };
      return (
        <div style={pinStyle2} onMouseUp={(e) => this.handleMouseUp(e, i)}
          onMouseDown={(e) => this.handleMouseDown(e, i)}
          onMouseMove={(e) => this.handleMouseMove(e, i)}
          key={i}></div>
      )
    }
  }
  renderColorBar(value, preValue, index) {
    var ratio = (value - preValue) / (this.state.max - this.state.min) * 100;
    console.log("in renderColorBar "+value+ " " + preValue + " " + index+ " ratio "+ ratio);
    const divStyle = {
      display: 'inline-block',
      position: 'relative',
      height: 12,
      width: ratio + '%',
      fontSize: 12,
      lineHeight: 18,
      backgroundColor: this.state.colors[index - 1]
    };

    return (
      <div style={divStyle} key={index} ref={c => {
        this.segments[index - 1] = c;
      }}>
        {this.renderPin(index - 1)}
      </div>
    )

  }
  render() {
    const {min, max} = this.props;
    const {isDragging} = this.state;
    let {values} = this.state;

    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] === 'undefined')
        values[i] = min;
    }

    var colorSegments = [];
    var valueList = this.state.values;
    console.log(" render from state.values " + valueList);
    if (valueList) {
      for (let j = 1; j < valueList.length; j++) {
        colorSegments.push(this.renderColorBar(valueList[j], valueList[j - 1], j));
      }
    }
    return (
      <div >
        <Button bsSize="big" bsStyle="info" style={{
          padding: 0,
          margin: 0
        }}>
          {this.state.name}
        </Button>
        <div style={{
          fontWeight: 'normal',
          width: '100%'
        }}>
          <span style={{
            userSelect: 'none', fontSize: '3vh'
          }}>{this.state.min}</span>
          <span style={{
            float: 'right',
            userSelect: 'none', fontSize: '3vh'
          }}>{this.state.max}</span>
        </div>
        {colorSegments}
        <div style={{
          fontWeight: 'normal',
          marginTop: 12, fontSize: '3vh'
        }}>[{this.state.values.toString()}]</div>
      </div>
    );
  }
}
