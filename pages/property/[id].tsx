import BookingSection from "@/components/property/BookingSection";
import PropertyDetails from "@/components/property/PropertyDetails";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // const property = PROPERTYLISTINGSAMPLE.find((data) => data.name === id);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  console.log(property);

  if(loading){
    return <p>Loading...</p>
  }

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetails property={property} />
      <BookingSection price={property} />
      <ReviewSection reviews={[]} />
    </div>
  );
};

export default PropertyPage;
