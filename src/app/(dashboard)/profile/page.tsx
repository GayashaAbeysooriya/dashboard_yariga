import ProfileCard from '@/components/ProfileCard';
import React from 'react'

interface Profile {
  id: number;
  name: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  photo: string;
}


const page = () => {
  const profile: Profile[] = [
    {
      id: 1,
      name: "Karen Eilla",
      role: "Real-Estate Agent",
      email: "foroncboyette@fvontigp.don",
      phone: "+229 250 5023",
      photo: "/image1.jpg",
      address: "4517 Washington Ave. Manchester"
    }
  ]
  return (
    <div >
      
        <div className="grid grid-cols-1 gap-4">
        {profile.map((property)=>(<ProfileCard key={property.id} id={property.id} name={property.name} address={property.address} email={property.email} role={property.role} photo={property.photo} phone={property.phone}/>))}
        </div>
      
    </div> 
    
  )
}

export default page