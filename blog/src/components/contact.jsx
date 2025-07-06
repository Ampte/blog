import React, { useState } from 'react'

const Contact = () => {

    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    const handleChange = (e) =>{
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://chola-bara-server.onrender.com/api/email", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then((response) => response.json())
        .then((data) => {
            if(data){
                setSubscribe(true);
            }
        })
        .catch((error) => {
            console.log("Something went wrong!", error);
        });
    };

    return(
        <>
        <div className='contact'>
            <div className='subscribe'>
                <h2 style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>Subscribe</h2>
                <form onSubmit={handleSubmit}>
                    <input type='email' name='email' onChange={handleChange} className='enter-email' placeholder='Email'required/>
                    <button type='submit' className='subscribe-btn'>
                        {subscribe ? <span>You have subscribed</span> : <span>Click to subscribe</span>}
                    </button>
                </form>
            </div>
            <div className='follow-me'>
                <h2 style={{backgroundColor: 'black', color: 'white', padding: '10px'}}>Follow me</h2>
                <p style={{fontSize: 'large'}}>
                    <a href='https://www.facebook.com/share/1EpkWhjM4H/'><i class="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/ampte_marak?igsh=eTh2dXQyZ3F6MmEz'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/ampte-b-marak-69844730a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><i class="fa-brands fa-linkedin"></i></a>
                    <a href='https://x.com/AmpteB76281?t=G-kp_YKkRIybTtQc0ndzFA&s=09'><i class="fa-brands fa-square-x-twitter"></i></a>
                </p>
            </div>
        </div>
        </>
    );
};

export default Contact;