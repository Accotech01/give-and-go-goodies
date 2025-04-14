
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gift, ShoppingBag, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();

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
          <nav className="flex space-x-2">
            <Button asChild variant="ghost" className="flex items-center gap-2">
              <Link to="/donate">
                <Gift size={18} />
                <span className="hidden sm:inline">Donate Items</span>
              </Link>
            </Button>
            <Button asChild variant="ghost" className="flex items-center gap-2">
              <Link to="/items">
                <ShoppingBag size={18} />
                <span className="hidden sm:inline">Browse Items</span>
              </Link>
            </Button>
            
            {!isAuthenticated ? (
              <>
                <Button asChild variant="ghost" className="flex items-center gap-2">
                  <Link to="/login">
                    <LogIn size={18} />
                    <span className="hidden sm:inline">Sign In</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" className="flex items-center gap-2">
                  <Link to="/register">
                    <UserPlus size={18} />
                    <span className="hidden sm:inline">Register</span>
                  </Link>
                </Button>
              </>
            ) : (
              <Button variant="ghost" className="flex items-center gap-2" onClick={logout}>
                <LogOut size={18} />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
