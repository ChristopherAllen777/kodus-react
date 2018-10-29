import React from 'react';

import MyComponent from '../utils/MyComponent';


export default class ImageCarousel extends MyComponent {
    constructor(props) {
        super(props);
        this.state = {carousel_index: 0};
        this.changeCarouselImage = this.changeCarouselImage.bind(this);
    }

    componentDidMount() {
      // componentDidMount is a safe place to make API calls, set timers, mount 3rd party components to the DOM, etc
      //
      //   example taken from react-examples clock (you can download and install to see react examples, including a clock...go to its homepage):
      //   https://bitbucket.org/codyc54321/react-examples/src/22be4d59cd2ab4733e01710b4e76d6b41d1e5276/views/clock.tpl?at=master&fileviewer=file-view-default
        this.carousel_timer_id = setInterval(
            () => this.changeCarouselImage(),
            (this.props.timing * 2000) // setInterval needs milliseconds
        )
    }

    changeCarouselImage() {
        let incremented_index = this.state.carousel_index + 1;
        if (incremented_index >= this.props.images.length) {
            this.setState({carousel_index: 0});
        } else {
            this.setState({carousel_index: incremented_index});
        }
    }

    render() {
        let url = this.props.images[this.state.carousel_index];

        if (this.props.component) {
            // if you pass a component props that don't exist, they just get ignored
            return (<this.props.component url={url} classes={this.props.classes} style={this.props.styles} />);
        } else {
            return (<img className={this.props.classes} src={url} style={this.props.styles}/>)
        }
    }
}
