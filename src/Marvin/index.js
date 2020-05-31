import React from 'react';

import './style.scss';
  
export default function Marvin() {
 
    return (
        <div className = "parallax">
            <div className = "container">
                <div className = "headerM">
                    <div className = "logo"/>
                    <input id = "sent"
                    type = "submit"
                    class = "sendButton"
                    value = "View Charts"
                    name = "sendButton"/>            
                </div>
                <div className="bodyM">
                    <div className = "marvin"/>
                    <div className = "messages">
                        <div className = "balloon1">
                            Hello! I'm Marvin. This site is a prototype, so I still don't have the ability to chat with you :(
                        </div>
                        <div className = "balloon2">
                            But in the future, I will have artificial intelligence, and I will be able to assist you in the functioning of the website and data interpretation. I hope to see you soon! ;)
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    )
}

