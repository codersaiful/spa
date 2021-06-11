import React, { Component } from 'react';

//Form Import Here
import Form from './Form';

class Contact extends Component{

    render(){
        return(
            <div className="contact-page page">
                <div className="page-heading">
                    <h1>Contact</h1>
                </div>
                <div className="page-body">
                    
                    <Form />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        
                </div>
            </div>
        );
    }
}

export default Contact;