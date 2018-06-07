import React from 'react';
import {Panel, Grid, Row, Col, Button} from 'react-bootstrap';
import ColorSlider from './components/ColorSlider.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        measure: "Demo Color Slider",
        thresholds: [[0, 20.8, 100], [0, 20, 40, 60, 75, 100], [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000]],
        colors: [["#FF9910", "#FFFB00"],
                 ["red", "#FF9910", "#FFFB00", "#4BDD33", "blue"],
                 ["#E5E7E9", "#D5DBDB", "#CCD1D1", "#B2BABB", "#99A3A4", "#7F8C8D", "#616A6B" ]]

    }
  }

  onChange(values) {
      console.log("Slider " + values.name + "  changed: " + values.values);
  }

  render() {
        return (
            <div id="outer-container" style={{
                height: '100vh'
            }}>
                    <Grid fluid={true} style={{overFlow: 'hidden', height: '100vh'}}>
                        <Row className="show-grid" style={{overFlow: 'hidden', height: '100vh'}}>
                            <Col xs={5} md={5} lg={5} style={{
                                height: '100vh',
                                padding: 0,
                                margin: 0,
                                border: '0px solid white',
                                outline: 'white solid 0px'
                            }}>
                                <Button bsSize="lg" bsStyle="info" style={{
                                    padding: 0,
                                    margin: 0
                                }}>
                                    {this.state.measure}
                                </Button>
                                <ColorSlider min={this.state.thresholds[0][0]} max={this.state.thresholds[0][this.state.thresholds[0].length-1]} name={this.state.measure}
                                             thresholds={this.state.thresholds[0]} colors={this.state.colors[0]} onChange={this.onChange}/>
                                <ColorSlider min={this.state.thresholds[1][0]} max={this.state.thresholds[1][this.state.thresholds[1].length-1]} name={this.state.measure}
                                             thresholds={this.state.thresholds[1]} colors={this.state.colors[1]} onChange={this.onChange}/>
                                <ColorSlider min={this.state.thresholds[2][0]} max={this.state.thresholds[2][this.state.thresholds[2].length-1]} name={this.state.measure}
                                             thresholds={this.state.thresholds[2]} colors={this.state.colors[2]} onChange={this.onChange}/>
                            </Col>
                            <Col xs={7} md={7} lg={7} style={{
                                padding: 0,
                                margin: 0,
                                height: '100vh'
                            }}>
                            </Col>
                        </Row>
                    </Grid>
            </div>


        );
    }
}


export default App;
