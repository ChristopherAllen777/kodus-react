import React, { Component } from 'react';


class ContentTextPanel extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <h3 style= { { textAlign: 'center' } }>{this.props.header}</h3>
                <blockquote>{this.props.body_text}</blockquote>
            </div>
        )
    }
}

class ContentImage extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <img style= { {display: 'block', margin: 'auto', width: '80%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'} } src={this.props.url} />
            </div>
        )
    }
}

export default class ContentBlock extends Component {

    render () {
        let content_image = (<ContentImage url={this.props.url}  />);
        let content_text = (<ContentTextPanel header={this.props.header} body_text={this.props.body_text} />);

        // default content to assuming image is on left. if right, reset it
        let content = (
            <div>
                {content_image}
                {content_text}
            </div>
        )

        if (this.props.image_location == 'right') {
            // overwrite it to right side
            content = (
                <div>
                    {content_text}
                    {content_image}
                </div>
            );
        }
        return (
            <div>
                {/* TODO: remove these styles to a class  */}
                <div style= { { backgroundColor: 'white', paddingTop: '20px' } } className="row">
                    {content}
                </div>
            </div>
        )
    }
}
