import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextList from './textListContainer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {
    Navbar,
    Row,
    Col,
    Nav,
    Container,
    Jumbotron
} from 'react-bootstrap';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar bg="light" className='nav-bar'>
                    <Navbar.Brand>Labeler App</Navbar.Brand>
                    <Nav.Link href="/">Home</Nav.Link>
                </Navbar>
                <Switch>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col lg={8}>
                    <TextList/>
                </Col>
                <Col lg={4}>
                    <Jumbotron>
                        <h5>Use this app to label words inside texts. Click on one word and select a label.</h5>
                        <p>For this example you can tag words as "Good word" "Bad Word". Results will be saved automatically to the database. To explore the raw results, got to:
                            <a href='https://labeler-app.herokuapp.com/textSamples/'>https://labeler-app.herokuapp.com/textSamples/</a>
                        </p>
                    </Jumbotron>

                </Col>
            </Row>
        </Container>
    )
}
export default App;
