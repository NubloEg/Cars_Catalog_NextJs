import React from "react";
import Card from "../Card/Card";
import { Car } from "@/app/types/car-types";

interface Props {
  cars: Car[];
}

const CardList = ({ cars }: Props) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <Card key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
