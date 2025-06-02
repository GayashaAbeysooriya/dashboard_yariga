import React from 'react'

import { Card, CardContent } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import { Bed } from '@mui/icons-material';
import Image from 'next/image';

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  photo: string;
  beds: number;
  size: string
}

function PropertyCard(prop:Property) {
  return (
    <Card className="flex gap-4 p-3 items-center hover:shadow-xl transition-all">
      <Image 
        src={prop.photo} 
        alt={`Property image of ${prop.title}`} 
        className="w-32 h-28 object-cover rounded-xl" 
        width={128} 
        height={112} 
      />
      <CardContent className="p-0">
        <div className="text-sm text-blue-600 font-semibold">${prop.price}</div>
        <h3 className="font-bold text-md">{prop.title}</h3>
        <p className="text-gray-600 text-sm flex items-center">
          <LocationOn className="h-4 w-4 mr-1" /> {prop.location}
        </p>
        <p className="text-gray-500 text-xs flex items-center mt-1">
          <Bed className="h-4 w-4 mr-1" /> {prop.beds} Beds &nbsp; • &nbsp; {prop.size}
        </p>
      </CardContent>
    </Card>
  );
}

export default PropertyCard