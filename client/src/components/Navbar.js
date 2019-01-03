import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from "react-responsive"
import { withNav } from '../context/NavbarProvider'
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
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })

    }
    render() {
        return (
            <div>
                <MediaQuery maxWidth={768}>
                        <Navbar color="light" light expand="sm">
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
                </MediaQuery>
                <MediaQuery minWidth={769}>
                    <div id="sidebar">
                    <Navbar color="light" light expand="sm">
                        <NavbarBrand href="/">reactstrap</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar >
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

export default withNav(Navbar1)
