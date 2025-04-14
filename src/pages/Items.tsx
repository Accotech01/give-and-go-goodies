
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import ItemCard from '@/components/ItemCard';
import { items } from '@/data/items';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, X, Info } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';

const categories = [...new Set(items.map(item => item.category))];
const conditions = [...new Set(items.map(item => item.condition))];

const Items = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const { isAuthenticated } = useAuth();

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesCondition = selectedCondition ? item.condition === selectedCondition : true;
    
    return matchesSearch && matchesCategory && matchesCondition;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory(null);
    setSelectedCondition(null);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Available Items</h1>
          <p className="text-gray-600 mb-4">
            Browse items that are available for pickup or delivery. All items are free - you only pay for logistics.
          </p>
          
          {!isAuthenticated && (
            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6 flex items-start gap-3">
              <Info className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-800">Authentication Required</h3>
                <p className="text-amber-700 text-sm mt-1">
                  You need to be logged in to request items. Please{' '}
                  <Link to="/login" className="font-medium underline">sign in</Link> or{' '}
                  <Link to="/register" className="font-medium underline">register</Link> to continue.
                </p>
              </div>
            </div>
          )}
          
          {/* Search and filters */}
          <div className="space-y-4">
            <div className="flex gap-4 flex-col sm:flex-row">
              <div className="relative flex-grow">
                <Input
                  placeholder="Search items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedCategory || undefined} onValueChange={(value) => setSelectedCategory(value || null)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-categories">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedCondition || undefined} onValueChange={(value) => setSelectedCondition(value || null)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-conditions">All Conditions</SelectItem>
                    {conditions.map(condition => (
                      <SelectItem key={condition} value={condition}>{condition}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Active filters */}
            {(selectedCategory || selectedCondition || searchTerm) && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-500">Active filters:</span>
                
                {selectedCategory && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Category: {selectedCategory}
                    <X 
                      size={14} 
                      className="cursor-pointer" 
                      onClick={() => setSelectedCategory(null)}
                    />
                  </Badge>
                )}
                
                {selectedCondition && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Condition: {selectedCondition}
                    <X 
                      size={14} 
                      className="cursor-pointer" 
                      onClick={() => setSelectedCondition(null)}
                    />
                  </Badge>
                )}
                
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchTerm}
                    <X 
                      size={14} 
                      className="cursor-pointer" 
                      onClick={() => setSearchTerm('')}
                    />
                  </Badge>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Items grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No items match your search criteria.</p>
            <Button 
              variant="outline" 
              onClick={resetFilters} 
              className="mt-4"
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Items;
