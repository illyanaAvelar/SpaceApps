import React from 'react';

import './style.scss';
  
export default function Inicial() {
 
    return (
        <div className = "parallax">
            <div className = "container">
                <div className = "header">
                    <div className = "logo"/>
                    <div className = "title">
                    "The best way to predict the future...<br></br> is to to create it."
                    </div>
                    <div className = "authors">
                    Abraham Lincoln and Peter Drucker
                    </div>
                    <div className = "bar"/>
                </div>
                <div className="body">
                    <div className = "info">
                            We are a platform that uses environmental, social and <br/>
                            political data to analyze and point out the best decisions <br/>
                            to contain the COVID-19 curve over time.
                    </div>
                    <div className = "boxes">
                        <div className = "analyze">
                            <div className = "box_title">
                                Analyze
                            </div>
                            <div className = "text">
                            View COVID-19 data in real time <br/>
                            in an easy to understand way
                            </div>
                            <input id = "sent"
                            type = "submit"
                            class = "sendButton"
                            value = "View Charts"
                            name = "sendButton"/>
                             <div className = "bar"/>
                        </div>
                        <div className = "project">
                            <div className = "box_title">
                                Project
                            </div>
                            <div className = "text">
                            Make predictions based on climate, <br/>
                            social and political variables
                            </div>
                            <input id = "sent"
                            type = "submit"
                            class = "sendButton"
                            value = "Simulate"
                            name = "sendButton"/>
                            <div className = "bar"/>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}

