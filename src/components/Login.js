import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        return (
            <div>
                <h2 className='page-header'>Account Login</h2>
                <form method='post' action='/users/login'>
                    <div className='form-group'>
                        <label>Username</label>
                        <input type='text' className='form-control' placeholder='Username'/>
                    </div>
                
                    <div className='form-group'>
                        <label>Password</label>
                        <input type='password' className='form-control' placeholder='Password'/>
                    </div>
                    
                    <button type='submit' className='btn btn-default'>Submit</button>
                </form>
            </div>
        );
    }
}