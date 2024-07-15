'use client';
import React from 'react';

const HomePage = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  // Handle email input change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send email to backend
    console.log(email);
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage(data.message);
      setEmail('');
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen md:p-24 p-8 hero-section" style={{ backgroundImage: 'url("/hero-image.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-90 hero-overlay"></div>
        <div className="container mx-auto flex flex-col items-center justify-center h-full relative">
          <h1 className="md:text-5xl text-4xl font-bold text-center mb-4 ">Discover Live Music Like Never Before</h1>
          <p className="md:text-lg text-md mb-8 text-center">Your ultimate destination to find, explore, and experience live music events near you.</p>
          <a href="/seek-events" className="primary-btn">Seek Events</a>
        </div>
      </section>

      {/* Email Subscription Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-8">Stay up-to-date with the latest live music events that you won&apos;t want to miss! Sign up now and receive personalized event recommendations tailored to your preferences. We promise not to spam you!</p>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none text-black"
                value={email}
                onChange={handleEmailChange}
              />
              <button
                type="submit"
                className="primary-btn text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </div>
            {message && <p>{message}</p>}
          </form>
        </div>
      </section>
      {/* line */}
      <div className="container mx-auto text-center">
        <hr className="border-1 border-gray-300" />
      </div>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="md:text-4xl text-3xl font-bold mb-6">About LiveMuseek</h2>
          <p className="md:text-lg text-md mb-6">LiveMuseek connects music enthusiasts with live performances happening in their area. Whether you&apos;re a fan or a musician, our platform provides an easy way to discover and promote live music events.</p>
          <div className="flex md:flex-row flex-col justify-center md:space-x-4 md:space-y-0 space-y-8">
            <div className="card md:w-1/3 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">For Fans</h3>
              <p>Find live music events by genre, location, and date. Never miss your favorite artists performing near you.</p>
            </div>
            <div className="card md:w-1/3 p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">For Musicians</h3>
              <p>Promote your gigs and connect with your audience. Make your performances more accessible and increase your fanbase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* line */}
      <div className="container mx-auto text-center">
        <hr className="border-1 border-gray-300" />
      </div>

      {/* Featured Events Section */}
      <section id="events" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Featured Events</h2>
          {/* write description of featured events. say how for a price you can feature here. link to payment page */}
          <p className="text-lg mb-8">Check out some of the top live music events happening soon. Want to feature your event here? <a href="/payment" className="text-blue-500 hover:underline">Learn More</a></p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Event */}
            <div className="card p-6 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4">Rock Night at Esplanade</h3>
              <p className="text-gray-700 mb-2">Date: 20th May 2024</p>
              <p className="text-gray-700 mb-2">Location: Esplanade Concert Hall, Singapore</p>
              <p className="text-gray-700 mb-2">Genres: Rock, English</p>
              <a href="#" className="text-blue-500 hover:underline">Learn More</a>
            </div>
            {/* Add more events here */}
          </div>
        </div>
      </section>

      {/* line */}
      <div className="container mx-auto text-center">
        <hr className="border-1 border-gray-300" />
      </div>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">How It Works</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="card p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Seek Events</h3>
                <p className="text-gray-700">Browse through a curated list of live music events happening around you. Filter by genre, location, and date to find your perfect music experience.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="card p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Promote Your Gigs</h3>
                <p className="text-gray-700">Are you a musician? List your gigs on LiveMuseek and reach a broader audience. Let your fans know where and when you are performing next.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="card p-6 rounded-lg shadow">
                <h3 className="text-2xl font-semibold mb-4">Connect with Artists</h3>
                <p className="text-gray-700">Follow your favorite artists and get notified about their upcoming performances. Engage with the community and never miss a beat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* line */}
      <div className="container mx-auto text-center">
        <hr className="border-1 border-gray-300" />
      </div>
      {/* Call to Action Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join LiveMuseek Today</h2>
          <p className="text-lg mb-8">Sign up now to start discovering amazing live music events and promoting your performances.</p>
          <a href="/signup" className="primary-btn">Sign Up</a>
        </div>
      </section>



      {/* Footer Section */}
      <footer className="py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 LiveMuseek. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <a href="#" className="hover:text-gray-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default HomePage;
