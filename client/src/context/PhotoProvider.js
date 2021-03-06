import React, { Component } from 'react'
import axios from 'axios'

const { Provider, Consumer } = React.createContext()

class PhotoProvider extends Component{
    constructor(){
        super()
        this.state = {
            gallery1: [],
            gallery2: [],
            gallery3: [],
            galleryData: {},
        }
    }

    componentDidMount(){
        axios.get('/photos/gallery1').then(res => {
            this.setState({
                gallery1: res.data
            })
        }).catch(err => console.log(err))
        axios.get('/photos/gallery2').then(res => {
            this.setState({
                gallery2: res.data
            })
        }).catch(err => console.log(err))
        axios.get('/photos/gallery3').then(res => {
            this.setState({
                gallery3: res.data
            })
        }).catch(err => console.log(err))
    }

    getEachData = (id) =>{
        axios.get(`/photos/galleryView/${id}`).then(res =>{
            console.log(res)
            this.setState({
                galleryData: res.data
            })
        })
    }

    render(){
        return(
           <Provider value={{
               ...this.state,
               getEachData: this.getEachData
           }}>
                {this.props.children}
           </Provider>
        )
    }
}

export const withPhotos = C => props => (
    <Consumer>
        {value => <C {...value} {...props} />}
    </Consumer>
)

export default PhotoProvider