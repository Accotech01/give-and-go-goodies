
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ItemCard from '@/components/ItemCard';
import { items } from '@/data/items';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Display only 3 featured items on the home page
  const featuredItems = items.slice(0, 3);

  return (
    <Layout>
      <Hero />
      
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">List Your Donations</h3>
              <p className="text-gray-600">
                Upload photos and details about items you no longer need but that could help others.
              </p>
            </div>
            
            <div className="text-center p-6 bg-secondary-50 rounded-lg">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Connect With Recipients</h3>
              <p className="text-gray-600">
                People in need browse items and request what they can use.
              </p>
            </div>
            
            <div className="text-center p-6 bg-accent-50 rounded-lg">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Pay Only For Logistics</h3>
              <p className="text-gray-600">
                Recipients only pay for delivery costs - the items themselves are free.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Items</h2>
            <Link to="/items" className="text-accent-600 hover:text-accent-800 flex items-center gap-1">
              View all items <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map(item => (
              <ItemCard 
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                condition={item.condition}
                location={item.location}
                imageUrl={item.imageUrl}
                logisticsCost={item.logisticsCost}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Impact Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-primary-100">Items Donated</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">350+</div>
              <p className="text-primary-100">Families Helped</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <p className="text-primary-100">Communities Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">$25K</div>
              <p className="text-primary-100">Value Redistributed</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What People Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="italic text-gray-600 mb-4">
                "I was able to furnish my entire apartment after a difficult move. The only cost was delivery, which saved me thousands of dollars during a tough time."
              </p>
              <div className="font-semibold">Maria T. - Recipient</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <p className="italic text-gray-600 mb-4">
                "Instead of selling my old furniture for pennies, I was able to give it to someone who really needed it. The platform made the process so easy."
              </p>
              <div className="font-semibold">James R. - Donor</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
