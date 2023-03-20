import React from 'react'
import { useState } from 'react'

export default function Contact() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [email, setEmail] = useState("");
const [errors, setErrors] = useState({});
const [formSubmitted, setFormSubmitted] = useState(false);

const validateForm = () => {
  let errors = {};
  let isValid = true;

  if (!username.trim()){
    errors.username = 'Username is required';
    isValid = false;
  }

  if(!email.trim()){
    errors.email = 'email is required';
    isValid = false;
  }else if (!/\s+@\s+\.\s+/.test(email)){
    errors.email = 'Email is invalid';
    isValid = false;
  }

  if(!password.trim()){
    errors.password = 'password is required';
    isValid = false;
  }else if(password.length < 8){
    errors.password = 'Password must be at least 8 characters long'
    isValid = false;
  }

  setErrors(errors);
  setFormSubmitted(true);
  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if(validateForm()) {
    console.log(`username: ${username}, Email: ${email}, Password: ${password}`);
  }
};

  return (
    <div className='w-full mx-auto py-10 sm:py-14 bg-white'>
      <div className='grid lg:grid-cols-2 gap-8 md:max-w-[900px] sm:max-w-[450px] mx-auto'>
        <div className='h-[80vh] p-8 shadow-xl'>
          <h1 className='font-bold text-3xl mb-4'>
            Contact Us
          </h1>
          <p>
            Contact us today to learn more about how we can help you achieve your web development goals.
            We look forward to hearing from you!
          </p>
          <div className='mt-8 space-y-4'>
            <span className='border py-2 px-4 rounded '>Email</span>
            <span className='border py-2 px-4 rounded '>LinkedIn</span>
            <span className='border py-2 px-4 rounded '>GitHub</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
        
        <div className='h-[80vh] p-8 shadow-xl'>
          <h1 className='font-bold text-3xl mb-4'>
            Login
          </h1>
          
          <div>
          <label className='block mb-2'>Username</label>
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Name' className='block w-full border rounded py-2 px-4 mb-4' />
          {errors.username && <div className="error bg-red-400 ">{errors.username}</div>}
          </div>

          <div>
          <label className='block mb-2'>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='block w-full border rounded py-2 px-4 mb-4' />
          {errors.email && <div className="error bg-red-400">{errors.email}</div>}
          </div>

          <div>
          <label className='block mb-2'>Password</label>
          <input type='password' value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='Enter Password' className='block w-full border rounded py-2 px-4 mb-4' />
          {errors.password && <div className="error bg-red-400">{errors.password}</div>}
          </div>
          
          <div>
          <label className='block mb-2'>Message</label>
          <textarea placeholder='Enter Message' className='block w-full border rounded py-2 px-4'></textarea>
          </div>
          
          <button type='submit' className='md:mx-0 text-white font-bold hover: cursor-pointer rounded w-[200px] bg-black py-2 px-5 my-6 mx-auto '>Submit</button>
        </div>
        </form>
      </div>
    </div>
  )
}
