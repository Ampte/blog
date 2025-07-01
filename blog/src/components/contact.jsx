import React from 'react'

const Contact = () => {
    return(
        <>
        <div className='contact'>
            <div className='subscribe'>
                <h2 style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>Subscribe</h2>
                <form>
                    <input type='email' className='enter-email' placeholder='Email'required/>
                    <button type='submit' className='subscribe-btn'>Subscribe</button>
                </form>
            </div>
            <div className='follow-me'>
                <h2 style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>Follow me</h2>
                <p style={{fontSize: 'large'}}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-x-twitter"></i>
                </p>
            </div>
        </div>
        </>
    );
};

export default Contact;