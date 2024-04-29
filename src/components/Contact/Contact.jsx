import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://formspree.io/f/mrgvalwe', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(response => {
            if (response.ok) {
                alert('¡Thank you for your message!');
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                response.json().then(data => {
                    if (data.errors) {
                        alert('Something went wrong: ' + data.errors.map(error => error.message).join(', '));
                    }
                });
            }
        }).catch(error => {
            alert('Something went wrong: ' + error);
        });
    };

    return (
        <div className="container my-5" id='contact' style={{ maxWidth: '540px' }}>
            <h2 className='text-center text-color'>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Message" className="form-label">Mensaje</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
