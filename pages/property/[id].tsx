import BookingSection from "@/components/property/BookingSection";
import PropertyDetails from "@/components/property/PropertyDetails";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import { useRouter } from "next/router";
import React from "react";

const PropertyPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((data) => data.name === id);

  console.log(property);

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <PropertyDetails property={property} />
      <BookingSection price={property.price} />
      <ReviewSection reviews={[]} />
    </div>
  );
};

export default PropertyPage;
