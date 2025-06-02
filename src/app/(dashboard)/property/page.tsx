import FilterBar from "@/components/FilterBar";
import PropertyCard from "@/components/PropertyCard";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  photo: string;
  beds: number;
  size: string;
}

const Page = () => {
  const properties: Property[] = [
    {
      id: 1,
      title: "Modern Apartment",
      location: "New York",
      price: 999.99,
      photo: "/image1.jpg",
      beds: 2,
      size: "28M",
    },
    {
      id: 2,
      title: "Beach House",
      location: "Los Angeles",
      price: 699.99,
      photo: "/image2.jpg",
      beds: 3,
      size: "20M",
    },
    {
      id: 3,
      title: "Luxury Condo",
      location: "Chicago",
      price: 199.99,
      photo: "/image3.jpg",
      beds: 4,
      size: "29M",
    },
    {
      id: 4,
      title: "Mountain Villa",
      location: "Chicago",
      price: 199.99,
      photo: "/image4.jpg",
      beds: 4,
      size: "29M",
    },
    {
      id: 5,
      title: "Urban Loft",
      location: "Chicago",
      price: 199.99,
      photo: "/image5.jpg",
      beds: 2,
      size: "20M",
    },
    {
      id: 6,
      title: "Country Cottage",
      location: "Chicago",
      price: 199.99,
      photo: "/image6.jpg",
      beds: 2,
      size: "19M",
    },
    {
      id: 7,
      title: "Mountain Villa",
      location: "Chicago",
      price: 199.99,
      photo: "/image7.jpg",
      beds: 2,
      size: "19M",
    },
    {
      id: 8,
      title: "Country Cottage",
      location: "Chicago",
      price: 199.99,
      photo: "/image8.jpg",
      beds: 2,
      size: "19M",
    },
    {
      id: 9,
      title: "Modern Apartment",
      location: "New York",
      price: 999.99,
      photo: "/image9.jpg",
      beds: 2,
      size: "28M",
    },
    {
      id: 10,
      title: "Beach House",
      location: "Los Angeles",
      price: 699.99,
      photo: "/image10.jpg",
      beds: 3,
      size: "20M",
    },
  ];
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Property List</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">+ Add Property</button>
      </div>

      <FilterBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         {properties.map((property)=>(<PropertyCard key={property.id} id={property.id} location={property.location} price={property.price} title={property.title} photo={property.photo} beds={property.beds} size={property.size}/>))}
      </div>
      
      
 
    </div>
  );
};

export default Page;
