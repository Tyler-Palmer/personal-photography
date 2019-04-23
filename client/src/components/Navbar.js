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
} from 'reactstrap'
import '../styles/navbar.css'
import 'font-awesome/css/font-awesome.min.css'
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
        console.log(this.props)
        return (
            <div>
                <MediaQuery maxWidth={768}>
                <div className={!this.props.displays ? "display" : ''}>
                    <Navbar color="light" expand="sm">
                        <NavbarBrand href="/">Tyler Palmer Photography</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <i className="fa fa-pie-chart" aria-hidden="true"></i>
                                    <Link className="p-2 navlink" to='/analysis'>Analysis</Link>
                                </NavItem>
                                <NavItem>
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <Link className="p-2 navlink" to='/about'>About</Link>
                                </NavItem>
                                <NavItem>
                                    <i className="fa fa-camera" aria-hidden="true"></i>
                                    <Link className="p-2 navlink" to='/galleries'>Galleries</Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                </MediaQuery>
                <MediaQuery minWidth={769}>
                    <div className={!this.props.displays ? "display" : ''}>
                        <Navbar color="light" expand="sm">
                            <NavbarBrand href="/">Tyler Palmer Photography</NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto sidebar1" navbar>
                                    <NavItem>
                                        <i className="fa fa-pie-chart" aria-hidden="true"></i>
                                        <Link className="p-2 navlink" to='/analysis'>Analysis</Link>
                                    </NavItem>
                                    <NavItem>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                        <Link className="p-2 navlink" to='/about'>About</Link>
                                    </NavItem>
                                    <NavItem>
                                        <i className="fa fa-camera" aria-hidden="true"></i>
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
