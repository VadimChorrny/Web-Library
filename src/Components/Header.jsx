import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function Header() {
    return (
        <>
            <div className="header">
                <div className="header__inner">
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#">Storage</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Features</Nav.Link>
                            <Nav.Link href="#">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                </div>
            </div>
        </>
    );
}

export default Header;
