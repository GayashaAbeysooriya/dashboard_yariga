import React from 'react'
import { Card, CardContent } from '@mui/material';
import { Email, Phone, LocationOn, Apartment } from '@mui/icons-material';
import Image from 'next/image';

interface Agent {
    id: number;
    name: string;
    role: string;
    email: string;
    photo: string;
    properties: number;
    phone: string;
    location: string;
  }

function AgentCard(prop:Agent) {
  return (
    <Card className="flex flex-row items-center gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all w-full">
      {/* Agent Photo */}
      <div className="w-32 h-32 rounded-xl overflow-hidden">
        <Image
          src={prop.photo}
          alt={`Profile image of ${prop.name}`}
          className="w-full h-full object-cover"
          width={128}
          height={128}
        />
      </div>

      {/* Agent Details */}
      <CardContent className="p-0 flex-1">
        {/* Name and Role */}
        <div className="mb-6">
          <h3 className="font-semibold text-xl text-gray-800">{prop.name}</h3>
          <p className="text-sm text-gray-500">{prop.role }</p>
        </div>

        {/* Info Section */}
        <div className="flex justify-between mt-6 text-sm text-gray-600 flex-wrap">
          {/* Left column: Email + Phone */}
          <div className="flex flex-col gap-2">
            {prop.email && (
              <p className="flex items-center">
                <Email className="h-4 w-4 mr-2 text-gray-500" />
                {prop.email}
              </p>
            )}
            {prop.phone && (
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                {prop.phone}
              </p>
            )}
          </div>

          {/* Right column: Location + Properties */}
          <div className="flex flex-col gap-2 text-right">
            {prop.location && (
              <p className="flex items-center justify-end">
                <LocationOn className="h-4 w-4 mr-2 text-gray-500" />
                {prop.location}
              </p>
            )}
            {prop.properties > 0 && (
              <p className="flex items-center justify-end">
                <Apartment className="h-4 w-4 mr-2 text-gray-500" />
                {prop.properties} Properties
              </p>
            )}
          </div>
        </div>
      </CardContent>
      </Card>
  )
}

export default AgentCard