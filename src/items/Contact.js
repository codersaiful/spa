import React, { Component } from 'react';

class Contact extends Component{

    render(){
        return(
            <div className="contact-page page">
                <div className="page-heading">
                    <h1>Contact</h1>
                </div>
                <div className="page-body">
                    <form className="form-inline" action="/action_page.php">
                        <label for="email">Email:</label>
                        <input type="email" id="email" placeholder="Enter email" name="email"/>
                        <label for="pwd">Password:</label>
                        <input type="password" id="pwd" placeholder="Enter password" name="pswd"/>
                        <label>
                            <input type="checkbox" name="remember" /> Remember me
                        </label>
                        <button type="submit">Submit</button>
                    </form>

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