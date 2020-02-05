import React, { useState } from 'react';
import './Loader.css';

const Loader = () => {

    const [visible, setVisible] = useState(false);

    const showLoader = () => setVisible(true);
    const hideLoader = () => setVisible(false);

    const loader = (
        <div className="loader">
            <div className="body">
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div className="base">
                    <span></span>
                    <div className="face"></div>
                </div>
            </div>
            <div className="longfazers">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* <h1>Redirecting</h1> */}
        </div>
    );

    return[visible ? loader : null, showLoader, hideLoader];
}

export default Loader;