import React from 'react';
import pic from '../assets/art.png'
import pic2 from '../assets/unnamed.png'
import pic3 from '../assets/bd.png'
import pic4 from '../assets/rcb.png'
import pic5 from '../assets/PNG.png'
import pic6 from '../assets/One-Piece-Logo-PNG-Images.png'
const About = () => {
  return (
    <div className="container mx-auto mt-8 p-10 bg-slate-700">
      {/* Introduction */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">About Our Platform</h1>
        <p className="text-white">
          Welcome to <span className='font-extrabold text-rose-400'>JOYBOY</span>, where buyers and skilled workers connect to get tasks done efficiently and securely. Our mission is to simplify the process of task delegation and completion, making it easy for you to focus on what matters most.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
        <ol className="list-decimal list-inside text-white">
          <li><strong>For Buyers:</strong> Post your task details, set your requirements, and wait for qualified workers to apply.</li>
          <li><strong>For Workers:</strong> Browse available tasks, apply for the ones that match your skills, and complete them at your convenience.</li>
          <li><strong>Task Management:</strong> Both buyers and workers can track progress, communicate directly, and finalize payments securely through our platform.</li>
        </ol>
      </section>

      {/* Features and Benefits */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Features & Benefits</h2>
        <ul className="list-disc list-inside text-white">
          <li><strong>Effortless Task Posting:</strong> Create and manage tasks with a user-friendly interface.</li>
          <li><strong>Quality Worker Pool:</strong> Access a vetted community of skilled workers ready to take on challenges.</li>
          <li><strong>Secure Payments:</strong> Enjoy peace of mind with our robust payment gateway and escrow system.</li>
          <li><strong>Transparent Reviews:</strong> Benefit from genuine reviews and ratings from past tasks.</li>
        </ul>
      </section>

      {/* Trust and Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Trust & Security</h2>
        <p className="text-white">
          We prioritize your security. Our platform employs industry-standard security protocols to ensure that every transaction is safe, and our verification processes help maintain a trustworthy community.
        </p>
      </section>

      {/* Call-to-Action */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Join Our Community</h2>
        <p className="text-white">
          Whether you're looking to get your tasks done or seeking flexible work opportunities, JOYBOY is the place to be. 
          <a href="/register" className="text-blue-600 hover:underline ml-2">Sign up today</a> and experience a new way to connect and collaborate.
        </p>
      </section>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">Our Partners</h2>
        <div className='gap-24 flex'>
          <img src={pic} className='w-1/12' alt="" />
          <img src={pic2} className='w-1/12' alt="" />
          <img src={pic3} className='w-1/12' alt="" />
          <img src={pic4} className='w-1/12' alt="" />
          <img src={pic6} className='w-1/4' alt="" />
        </div>
      </section>
    </div>
  );
};

export default About;
