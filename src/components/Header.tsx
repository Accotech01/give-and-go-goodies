
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gift, ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-primary-600 text-2xl font-bold">
                Give & Go Goodies
              </div>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Button asChild variant="ghost" className="flex items-center gap-2">
              <Link to="/donate">
                <Gift size={18} />
                <span>Donate Items</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="flex items-center gap-2">
              <Link to="/items">
                <ShoppingBag size={18} />
                <span>Browse Items</span>
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
