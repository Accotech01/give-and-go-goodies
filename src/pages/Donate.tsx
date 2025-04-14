
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { Upload } from 'lucide-react';

const Donate = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Donation Submitted",
      description: "Thank you for your donation! We'll review it and contact you soon.",
    });
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Donate Your Items</h1>
          <p className="text-gray-600">
            Your unused items can make a big difference in someone else's life. Fill out the form below 
            to donate items you no longer need, and we'll help get them to people who can use them.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-primary-50 border-primary-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What Can Be Donated?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Furniture in good condition</li>
                <li>Working appliances</li>
                <li>Clothing (clean and wearable)</li>
                <li>Books and educational materials</li>
                <li>Toys and children's items</li>
                <li>Kitchen and household items</li>
                <li>Electronics (in working condition)</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary-50 border-secondary-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Guidelines for Donation</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Items should be in usable condition</li>
                <li>Provide clear photos of the item</li>
                <li>Give an accurate description</li>
                <li>Be honest about any flaws or damage</li>
                <li>Donations are final once accepted</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-accent-50 border-accent-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What Happens Next?</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>We review your submission</li>
                <li>We contact you to confirm details</li>
                <li>Your item is listed on our platform</li>
                <li>When someone requests it, we arrange logistics</li>
                <li>Your donation finds a new home!</li>
              </ol>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Donation Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Your Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Full Name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(123) 456-7890" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <Input id="location" placeholder="City, State" required />
                </div>
              </div>
            </div>
            
            {/* Item Details */}
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Item Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="title">Item Name</Label>
                <Input id="title" placeholder="e.g., Wooden Dining Table" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="furniture">Furniture</SelectItem>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="appliances">Appliances</SelectItem>
                      <SelectItem value="books">Books</SelectItem>
                      <SelectItem value="toys">Toys & Games</SelectItem>
                      <SelectItem value="baby">Baby & Kids</SelectItem>
                      <SelectItem value="household">Household Items</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="condition">Condition</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="like_new">Like New</SelectItem>
                      <SelectItem value="excellent">Excellent</SelectItem>
                      <SelectItem value="very_good">Very Good</SelectItem>
                      <SelectItem value="good">Good</SelectItem>
                      <SelectItem value="fair">Fair</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide details about the item, including size, color, age, and any notable features or flaws."
                  rows={5}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label>Upload Photos</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Drag and drop image files here, or click to select files
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    (Up to 5 images, max 5MB each)
                  </p>
                  <Input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    id="file-upload"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Select Files
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-6">
                By submitting this form, you agree that the item(s) described above will be donated to 
                someone in need through our platform. You confirm that you are the rightful owner of the item(s)
                and agree to our <a href="#" className="text-primary-600 hover:underline">Terms and Conditions</a>.
              </p>
              
              <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700">
                Submit Donation
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Donate;
