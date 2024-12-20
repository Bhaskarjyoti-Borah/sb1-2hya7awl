import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">About Sumato Globaltech</h2>
            <p className="mt-4 text-lg text-gray-600">
              We are a leading technology solutions provider committed to delivering innovative and scalable solutions that help businesses thrive in the digital age.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Over 10 years of industry experience',
                'Global team of expert developers',
                'Proven track record of successful projects',
                'Customer-centric approach',
                'Cutting-edge technology solutions'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;