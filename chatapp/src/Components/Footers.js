import React from 'react'
import './Footer.css'



class Footer extends React.Component{
    Copyright = () => {
        <h2 variant = "body2" color = "textSecondary" align = "center">
            {
                'Copyright ©️'
            }
            {
                'Coding Cafe'
            }
            {
                new Date().getFullYear()
            }
            {
                '.'
            }

        </h2>

    }
    render(){
        return(
            <Footer>
                <div className='footer-1-box is-center'>
                    {this.Copyright()}
                </div>
            </Footer>
        )
    }
}

export default Footer;