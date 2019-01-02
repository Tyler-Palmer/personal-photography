import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from "react-responsive"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
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
            <div>
                <MediaQuery query="(max-device-width: 425px)">
                    <Navbar color="light" expand="md">
                        <NavbarBrand id="nav-title" href="/">Tyler Palmer Photography</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <span class="navbar-toggler-icon"></span>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className="p-2 navlink" to='/analysis'>Analysis</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="p-2 navlink" to='/about'>About</Link>
                                </NavItem>
                                <NavItem className="gallery-image">
                                    <Link className="p-2 navlink" to='/galleries'>Galleries</Link>
                                    <div style={{ paddingRight: '3px', paddingTop: '3px', display: 'inline-block', backgroundImage: `url("../icons/gallery_24px.png")` }}>
                                    </div>
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
                    <div>
                        <Navbar color="light" light expand="md">
                            <NavbarBrand href="/">reactstrap</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <Link className="p-2 navlink" to='/analysis'>Analysis</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="p-2 navlink" to='/about'>About</Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link className="p-2 navlink" to='/galleries'>Galleries</Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </MediaQuery>
            </div>
        )
    }
}

export default Navbar1
