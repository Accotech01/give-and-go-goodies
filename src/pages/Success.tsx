
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const Success = () => {
  const navigate = useNavigate();
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your order has been successfully placed. You'll receive a confirmation 
            email with all the details shortly.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">Next Steps</h2>
            <ol className="text-left space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="font-semibold">1.</span> 
                <span>We'll coordinate with the donor to arrange pickup of your item</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">2.</span> 
                <span>The logistics team will contact you to confirm delivery details</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">3.</span> 
                <span>Your item will be delivered to your address within 3-5 business days</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold">4.</span> 
                <span>We'll check in to make sure you're happy with your donation</span>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/items')}>
              Browse More Items
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Success;
