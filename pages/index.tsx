import Image from "next/image";
import backgroundImage from "@/public/assets/backgound.jpg";
import PropertyCard from "@/components/property/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";

const Home = () => {
  const category = useSelector((state: RootState) => state.pill.value);

  const UPDATEDPROPERTYLISTINGSAMPLE =
    category == "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((data) =>
          data.category.includes(category)
        );
  console.log(UPDATEDPROPERTYLISTINGSAMPLE, category);
  return (
    <div className="p-5 md:p-10 space-y-10">
      <div className="background">
        <div className="relative h-[30vh] lg:h-[50vh]">
          <Image
            src={backgroundImage}
            alt="back image"
            className="w-full h-full rounded-3xl"
            loading="eager"
          />
          <div className="backgoundText absolute inset-0 flex justify-center items-center flex-col gap-5">
            <h2 className="text-lg md:text-5xl max-w-lg font-semibold text-center text-white">
              Find your favorite place here!
            </h2>
            <p className="text-white text-xs md:text-base font-thin tracking-tight">
              The best prices for over 2 million properties worldwide
            </p>
          </div>
        </div>
      </div>
      <div>
        <Pill />
      </div>
      <div className="property-listing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {UPDATEDPROPERTYLISTINGSAMPLE.map(
          (
            { name, address, rating, category, price, image, discount, offers },
            key: number
          ) => {
            return (
              <Link href={`/property/${name}`}>
                <PropertyCard
                  name={name}
                  address={address}
                  rating={rating}
                  category={category}
                  price={price}
                  image={image}
                  discount={discount}
                  offers={offers}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Home;
