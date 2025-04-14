
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { items } from '@/data/items';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { CalendarIcon, MapPin, ShoppingCart, ArrowLeft } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Item Not Found</h2>
          <p className="mb-6">The item you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/items')}>
            Back to Items
          </Button>
        </div>
      </Layout>
    );
  }

  const handleRequestItem = () => {
    toast({
      title: "Item Requested",
      description: "We've added this item to your cart. You can proceed with the logistics payment.",
    });
    navigate('/checkout');
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/items')}
          className="mb-6 pl-0 flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to all items
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Item image */}
          <div className="rounded-lg overflow-hidden bg-white shadow-md">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          
          {/* Item details */}
          <div>
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">
                  {item.category}
                </Badge>
                <Badge variant="outline">
                  {item.condition}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{item.title}</h1>
              
              <div className="flex items-center gap-2 text-gray-500 mb-6">
                <MapPin size={16} />
                <span>{item.location}</span>
                <span className="mx-2">•</span>
                <CalendarIcon size={16} />
                <span>Added on {new Date(item.dateAdded).toLocaleDateString()}</span>
              </div>
              
              <div className="prose max-w-none text-gray-700 mb-8">
                <p>{item.description}</p>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-500">Donor</div>
                  <div className="font-medium">{item.donorName}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-500">Logistics Cost</div>
                  <div className="text-2xl font-bold text-primary-600">${item.logisticsCost.toFixed(2)}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    This covers packaging and delivery only - the item itself is free.
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-secondary-600 hover:bg-secondary-700 font-semibold py-3 text-lg"
                onClick={handleRequestItem}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Request This Item
              </Button>
              
              <p className="text-sm text-center mt-3 text-gray-500">
                Logged in as {user?.name} ({user?.email})
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
