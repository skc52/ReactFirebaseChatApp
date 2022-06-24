import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footers'
import './Home.css'
import Images from '../../ProjectImages/ProjectImages'

export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <Header>
                    <div className="splash-container">
                        <div className="splash">
                            <h1 className="splash-head">
                                WEB CHAT APP
                            </h1>
                            <p className='splash-subhead'>
                                Let's talk with our loved ones
                            </p>
                            
                        </div>
                    </div>
                </Header>
            </div>
            
        )
    }
}