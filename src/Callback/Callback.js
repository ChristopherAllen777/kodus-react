import React, { Component } from 'react';
import Loading from './loading.svg';

class Callback extends Component {
    render() {
        const style = {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'white',
        }

        return (
            <div style={style}>
                <Loading />
            {/* <img src={loading} alt="loading"/> */}
            {/* <div dangerouslySetInnerHTML={{__html: loading}} /> */}
          </div>
        );
    }
}

export default Callback;