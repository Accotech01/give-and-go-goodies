
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Gift, Search, Truck, CheckCircle, Heart } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">How Give & Go Goodies Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform connects generous donors with people in need, making it easy to give and receive 
            while only paying for logistics.
          </p>
        </div>
        
        {/* Process for Donors */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-primary-600 mb-10">For Donors</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">List Your Items</h3>
              <p className="text-gray-600">
                Fill out our simple donation form with photos and details about the items you want to donate.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">We Review and List</h3>
              <p className="text-gray-600">
                Our team reviews your submissions and publishes them on our platform for people in need to find.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Coordinated Pickup</h3>
              <p className="text-gray-600">
                When someone requests your item, we coordinate with you for a convenient pickup time.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-primary-600 hover:bg-primary-700">
              <Link to="/donate">Donate Items Now</Link>
            </Button>
          </div>
        </div>
        
        {/* Process for Recipients */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center text-secondary-600 mb-10">For Recipients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Browse Available Items</h3>
              <p className="text-gray-600">
                Explore our database of donated items, filtering by category, location, and other criteria.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Request and Pay Logistics</h3>
              <p className="text-gray-600">
                Request the item you need and pay only for the logistics cost to have it delivered to you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Receive Your Item</h3>
              <p className="text-gray-600">
                Your requested item will be delivered to your address within 3-5 business days.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="bg-secondary-600 hover:bg-secondary-700">
              <Link to="/items">Browse Available Items</Link>
            </Button>
          </div>
        </div>
        
        {/* FAQs */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Why do recipients pay for logistics?</h3>
              <p className="text-gray-600">
                We charge only for logistics to ensure the platform is sustainable while keeping 
                the items themselves completely free. This helps us maintain quality service and reliable delivery.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">What happens if an item doesn't meet expectations?</h3>
              <p className="text-gray-600">
                We have a quality assurance process, but if you receive an item that doesn't match 
                the description, contact us within 48 hours and we'll work to resolve the situation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I donate items that need minor repairs?</h3>
              <p className="text-gray-600">
                Yes, but you must clearly note any repairs needed in the description. We prefer items 
                that are fully functional, but sometimes items needing minor fixes are still very valuable.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How are logistics costs calculated?</h3>
              <p className="text-gray-600">
                Logistics costs are calculated based on the item's size, weight, and the distance 
                for delivery. We aim to keep these costs as low as possible.
              </p>
            </div>
          </div>
        </div>
        
        {/* Community Impact */}
        <div className="text-center mb-12">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-accent-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Community Impact</h2>
          
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Every donation helps someone in need while reducing waste and building community connections. 
            Together, we're making a difference one item at a time.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-gray-600">Items Donated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">350+</div>
              <div className="text-gray-600">Families Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">15</div>
              <div className="text-gray-600">Communities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600">$25K</div>
              <div className="text-gray-600">Value Redistributed</div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community Today</h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Whether you have items to give or need something for your home, 
            you're welcome in our community of givers and receivers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-primary-600 hover:bg-primary-700">
              <Link to="/donate">Donate Items</Link>
            </Button>
            <Button asChild className="bg-secondary-600 hover:bg-secondary-700">
              <Link to="/items">Find Items</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
