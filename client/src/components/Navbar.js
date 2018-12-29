import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from "react-responsive"
import Galleries from '../containers/Galleries'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarToggler,
    NavbarBrand,
    Collapse,
    Col,
    Row,
    Container
} from 'reactstrap'
import '../styles/navbar.css'
// import '../../node_modules/bootswatch/dist/materia/bootstrap.min.css'

class Navbar1 extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div className="fullscreen">
                <MediaQuery query="(max-device-width: 425px)">
                    <Navbar color="light" expand="md">
                        <NavbarBrand id="nav-title" href="/">Tyler Palmer Photography</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                </NavItem>
                                <NavItem>
                                    <Link className="p-2 navlink" to='/analysis'>Analysis</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="p-2 navlink" to='/about'>About</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="p-2 navlink" to='/galleries'>Galleries</Link>
                                </NavItem>
                                {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown> */}
                            </Nav>
                        </Collapse>
                    </Navbar>
                </MediaQuery>
                <MediaQuery query="(min-device-width: 426px)">
                    <Container id="sideNav" fluid>
                                <Navbar color="light" expand="xs">
                                    <NavbarBrand id="nav-title" href="/">Tyler Palmer Photography</NavbarBrand>
                                    <NavbarToggler onClick={this.toggle} />
                                    <Collapse isOpen={this.state.isOpen} navbar>
                                        <Nav className="ml-auto" navbar vertical>
                                            <NavItem>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="p-2 navlink" to='/analysis'>Analysis</Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="p-2 navlink" to='/about'>About</Link>
                                            </NavItem>
                                            <NavItem>
                                                <Link className="p-2 navlink" to='/galleries'>Galleries</Link>
                                            </NavItem>
                                            {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown> */}
                                        </Nav>
                                    </Collapse>
                                </Navbar>
                    </Container>

                </MediaQuery>
            </div>
        )
    }
}

export default Navbar1