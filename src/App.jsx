import React from 'react';
import {Panel, Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import ColorSlider from './ColorSlider.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        min: 0,
        max: 100,
        measure: "Demo Color Slider",
        thresholds: [0, 20, 40, 60, 75, 100],
        colors: ["red", "#FF9910", "#FFFB00", "#4BDD33", "blue"]

    }
  }


    render() {
        var appStyle = {
            padding: 0,
            margin: 0,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
            fontSize: '1.4vh',
            textAlign: "center",
            height: "100vh"
        };

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
                                <ColorSlider min={this.state.min} max={this.state.max} name={this.state.measure}
                                             thresholds={this.state.thresholds} colors={this.state.colors}/>
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
