import React, { Component } from 'react'
import { withPhotos } from '../context/PhotoProvider'
import '../styles/galleryview.css'
import { withNav } from '../context/NavbarProvider'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class GalleryView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoIndex: 0,
            isOpen: false,
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
        const { photoIndex, isOpen } = this.state;
        return (
            <div className="imageMenu">

                {isOpen && (
                    <Lightbox
                        mainSrc={this.props.galleryData.src}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
                <div className={`focusImage`}
                    style={{ backgroundImage: `url(${this.props.galleryData.src})`, width: "1000px", height: "1000px" }}
                    onClick={() => this.setState({ isOpen: true })}>
                </div>
                <div className="infoBar">

                </div>
            </div>
        )
    }
}

export default withNav(withPhotos(GalleryView))

//Use below to add cycling functionality

// {isOpen && (
//     <Lightbox
//         mainSrc={images[photoIndex]}
//         nextSrc={images[(photoIndex + 1) % images.length]}
//         prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//         onCloseRequest={() => this.setState({ isOpen: false })}
//         onMovePrevRequest={() =>
//             this.setState({
//                 photoIndex: (photoIndex + images.length - 1) % images.length,
//             })
//         }
//         onMoveNextRequest={() =>
//             this.setState({
//                 photoIndex: (photoIndex + 1) % images.length,
//             })
//         }
//     />
// )}