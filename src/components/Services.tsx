import React from 'react';
import { Code2, Cloud, Shield, Database, Smartphone, LineChart } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business needs and challenges.'
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure to power your digital transformation.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your valuable business assets.'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights for better decision-making.'
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Mobile Development',
    description: 'Create powerful mobile applications that engage your users.'
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: 'Digital Consulting',
    description: 'Strategic guidance to help you navigate the digital landscape.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive solutions for your business needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;