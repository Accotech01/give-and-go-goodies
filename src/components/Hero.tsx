
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary-100 to-secondary-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Give What You Don't Need, Get What You Do
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Connect with your community through giving. Donate items you no longer need
          and help others find what they're looking for, with only logistics costs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
            <Link to="/donate">
              I Want to Donate
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-secondary-600 hover:bg-secondary-700">
            <Link to="/items">
              I Need Something
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
