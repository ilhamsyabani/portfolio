'use client';
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MailIcon, User, ArrowRightIcon, MessageSquareIcon } from "lucide-react";
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_81nrou6', 
      'template_nkyhrtw', 
      formData,
      'nthR62E_ggy6fO0s1'
    ).then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.log(error.text);
        alert('Failed to send message, please try again later.');
      }
    );
  };

  return (
   <form onSubmit={handleSubmit}>
    <div className="relative flex items-center mb-4">
        <Input
          type='text'
          id='name'
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <User className="absolute right-6" size={20}/>
    </div>
    <div className="relative flex items-center mb-4">
        <Input
          type='email'
          id='email'
          placeholder='user@mail.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <MailIcon className="absolute right-6" size={20}/>
    </div>
    <div className="relative flex items-center mb-4">
        <Textarea
          id='message'
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
        <MessageSquareIcon className="absolute right-6" size={20}/>
    </div>
    <div>
        <Button type='submit' className='flex items-center gap-x-2 max-w-[160px]'>Let&apos;s Talk
            <ArrowRightIcon size={20} />
        </Button>
    </div>
   </form>
  );
}

export default Form;
