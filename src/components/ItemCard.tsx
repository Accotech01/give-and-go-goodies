
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ItemCardProps {
  id: string;
  title: string;
  category: string;
  condition: string;
  location: string;
  imageUrl: string;
  logisticsCost: number;
}

const ItemCard = ({ id, title, category, condition, location, imageUrl, logisticsCost }: ItemCardProps) => {
  return (
    <Card className="overflow-hidden transition duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className="bg-primary-100 text-primary-800">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="text-sm text-gray-500 space-y-1">
          <p>Condition: {condition}</p>
          <p>Location: {location}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-sm font-medium">
          <span className="text-gray-600">Logistics: </span>
          <span className="text-primary-600">${logisticsCost.toFixed(2)}</span>
        </div>
        <Link 
          to={`/items/${id}`}
          className="text-accent-600 hover:text-accent-800 text-sm font-medium"
        >
          View Details →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ItemCard;
