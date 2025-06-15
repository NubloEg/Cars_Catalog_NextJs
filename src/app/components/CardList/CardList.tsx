import React from "react";
import Card from "../Card/Card";

interface Props {
  cars: {
    unique_id: number;
    mark_id: string;
    folder_id: string;
    images: { image: string[] };
    price: number;
    availability: string;
    currency: "RUB";
    drive: "Задний" | "Передний";
    color: string;
  }[];
}

const CardList = ({ cars }: Props) => {
  return (
    <div className="container mx-auto px-4 py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <Card
            key={car.unique_id}
            id={car.unique_id}
            img={car.images.image[0]}
            title={car.mark_id + " " + car.folder_id}
            price={car.price}
            availability={car.availability}
            color={car.color}
            currency={car.currency}
            drive={car.drive}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
