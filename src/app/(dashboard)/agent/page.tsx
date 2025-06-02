import React from 'react'
import AgentCard from '@/components/AgentCard';

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

const Page = () => {
  const agents: Agent[] = [
    {
      id: 1,
      name: "Karen Eilla",
      role: "Real-Estate Agent",
      email: "foroncboyette@fvontigp.don",
      phone: "+229 250 5023",
      location: "Manchester",
      properties: 1,
      photo: "/a1.jpg",
    },
    {
      id: 2,
      name: "Walter Devid Moye",
      role: "Real-Estate Agent",
      email: "ladbekalontcliatng.lolohampygoodot",
      phone: "+960 654 7735",
      location: "Ofrago Cunce",
      properties: 2,
      photo: "/a2.jpg",
    },
    {
      id: 3,
      name: "Fean Yedcitie Bady",
      role: "Real-Estate Agent",
      email: "enonchgayherfealoofar.dogg",
      phone: "+542 453 6762",
      location: "Manchester",
      properties: 5,
      photo: "/a3.jpg",
    },
    {
      id: 4,
      name: "John Hove",
      role: "Real-Estate Agent",
      email: "johnjhs@gmail.com",
      phone: "+502 324 4199",
      location: "Chicago",
      properties: 2,
      photo: "/a4.jpg",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Agent List</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">+ Add Agent</button>
      </div>
      <div className="grid grid-cols-1 gap-4">
         {agents.map((property)=>(<AgentCard key={property.id} id={property.id} name={property.name} location={property.location} email={property.email} role={property.role} photo={property.photo} phone={property.phone} properties={property.properties}/>))}
      </div>
    </div>
  )
}

export default Page