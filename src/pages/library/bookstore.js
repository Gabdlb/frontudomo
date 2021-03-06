import React from 'react';
import './bookstore.css'
import {Button, Card} from "react-bootstrap";

const Bookstore = () => {
    return (
        <div>
            <div className="p-4 row">
                <Card style={{width: '18rem'}} className="m-4">
                    {/*<Card.Img variant="top" src={Udomo2}/>*/}
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
                    {/*<Card.Img variant="top" src={logo}/>*/}
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
                    {/*<Card.Img variant="top" src={logo}/>*/}
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
};

export default Bookstore;
