import React from 'react';
import logo from '../../ressources/logo.svg';
import Udomo2 from '../../ressources/Udomo2.png';
import './home.css';
import {Button, Card, Container, Nav, Navbar} from "react-bootstrap";

function Home() {
    return (
        <div>
            <h2>Test deploy CI/CD</h2>
            <div className="p-4 row">
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={Udomo2}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={logo}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={logo}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home;
