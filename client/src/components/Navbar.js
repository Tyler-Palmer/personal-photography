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
import Sidebar from 'react-sidebar'
import '../styles/navbar.css'
// import '../../node_modules/bootswatch/dist/materia/bootstrap.min.css'

class Navbar1 extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            sidebarOpen: true
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    render() {
        return (
            <div>
                {/* <MediaQuery query="(max-device-width: 425px)">
                    <div>
                        <Navbar color="light" light expand="xs">
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
                </MediaQuery> */}
                <MediaQuery query="(min-device-width: 769px)">
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
                    {/* <Sidebar
                        sidebar={<b>Sidebar content</b>}
                        open={false}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{ sidebar: { background: "white" } }}
                    >
                        <button onClick={() => this.onSetSidebarOpen(true)}>
                            Open sidebar
                        </button>
                    </Sidebar> */}
                </MediaQuery>
            </div>
        )
    }
}

export default Navbar1
