import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/menu">Library</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Post</Nav.Link>
                    <Nav.Link href="#">Slides</Nav.Link>
                    <Nav.Link href="/data">Data</Nav.Link>
                </Nav>

                <Form inline>
                    <Button variant="outline-dark">Sign</Button>
                </Form>
            </Navbar>
        </div>
    );
}

export default header;
