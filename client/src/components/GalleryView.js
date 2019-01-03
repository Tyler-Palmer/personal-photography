import React, { Component } from 'react'
import { withPhotos } from '../context/PhotoProvider'


class GalleryView extends Component{
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.getEachData(this.props.match.params.id)
    }

    render(){
        console.log(this.props)
        console.log(this.props.galleryData)
        return(
            <div>
                <div></div>
            </div>
        )
    }
}

export default withPhotos(GalleryView)