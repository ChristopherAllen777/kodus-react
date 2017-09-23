import React from 'react';

import MyComponent from '../utils/MyComponent';


export default class ImageSlider extends MyComponent {

    constructor(props) {
        let custom_methods = [
            'handleGoLeft',
            'handleGoRight',
        ]
        super(props, custom_methods);
        this.state = {
            image_index: 0
        };
    }

    handleGoLeft() {
        if (this.state.image_index == 0) { return; }
        let newIndex = this.state.image_index - 1;
        this.setState({image_index: newIndex});
    }

    handleGoRight() {
        if (this.state.image_index == (this.props.images.length - 1)) { return; }
        let newIndex = this.state.image_index + 1;
        this.setState({image_index: newIndex});
    }

    render() {
        let image_url = this.props.images[this.state.image_index];

        return (
            <div style={ { width: '220px', display: 'block', margin: 'auto', width: '100%',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} className="w3-content w3-display-container">
                <img className="mySlides" src={image_url} style={ { width: '100%' } } />
                <button
                    className="w3-button w3-black w3-display-left"
                    onClick={() => this.handleGoLeft()}>
                        &#10094;
                </button>
                <button style= { { float: 'right' } }
                    className="w3-button w3-black w3-display-right"
                    onClick={() => this.handleGoRight()}>
                        &#10095;
                </button>
            </div>
        )
    }
}
