import React, { Component } from 'react'
import { withPhotos } from '../context/PhotoProvider'
import '../styles/galleryview.css'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import { withNav } from '../context/NavbarProvider'

class GalleryView extends Component {
    constructor() {
        super()
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this)
    }
    componentDidMount() {
        this.props.getEachData(this.props.match.params.id)
        this.props.setDisplay()
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        console.log(this.props)
        console.log(this.props.galleryData)
        return (
            <div className="imageMenu">
                <Modal  isOpen={this.state.modal} 
                        toggle={this.toggle} 
                        className={this.props.className}
                        size={'lg'}
                        autoFocus={'true'}
                        centered={'true'}
                        noRepeat={'norepeat'}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody style={{ backgroundImage: `url(${this.props.galleryData.src})`, width: "1000px", height: "1000px" }}>
                    </ModalBody>
                </Modal>
                <div    className={`focusImage`} 
                        style={{ backgroundImage: `url(${this.props.galleryData.src})`, width: "1000px", height: "1000px" }}
                        onClick={this.toggle}>
                </div>
                <div className="infoBar">

                </div>
            </div>
        )
    }
}

export default withNav(withPhotos(GalleryView))