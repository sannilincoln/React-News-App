import React from 'react';

const Welcome = () => {
    return (
        <div style={{marginTop:'90px'}}>
                        <h1 className="center">Welcome to UpBase News App</h1>

        <div className='container'>
            <div className="row center center-align">
            <a className='btn blue signup' href="/#">sign up</a>
            {/* <a  className='btn blue' href="/#">login</a> */}

            </div>
            
        </div>
        </div>

    );
};

export default Welcome;