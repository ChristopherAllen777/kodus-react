import React, { Component } from 'react';
// import Loading from './loading.svg';
import { RingLoader } from 'react-spinners';

class Callback extends Component {
    constructor(props) {
        super(props);
        this.state ={
            loading: true
        }
    }
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
                <RingLoader
                    color={'#123abc'}
                    loading={this.state.loading}
                />
            {/* <img src={loading} alt="loading"/> */}
            {/* <div dangerouslySetInnerHTML={{__html: loading}} /> */}
          </div>
        );
    }
}

export default Callback;