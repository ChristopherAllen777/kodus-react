import React, { Component } from 'react';

export default class SContentImage extends Component {

    render() {
        let url = `${this.props.url}`
        return (
            <img className="mySlides" src={url} style={ {width: '100%'} }/>
        )
    }


}
