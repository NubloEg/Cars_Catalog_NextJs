import { Car } from "@/app/types/car-types";
import Image from "next/image";
import React, { Fragment } from "react";

export default function Card(car: Car) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.img}
          unoptimized
          fill
          alt={car.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{car.title}</h3>
        <div className=" flex-grow">
          <div className="grid grid-cols-2 gap-3">
            {Object.values(car.info).map((point, index) => (
              <Fragment key={index}>
                {point ? (
                  <div className="bg-gray-50 p-2 rounded border h-[40px] border-gray-100 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <span className="text-gray-400 text-sm text-bold italic">
            {car.availability}
          </span>
          <span className="text-gray-400 text-sm text-bold italic">
            {car.state}
          </span>
          <span className="text-gray-400 text-sm text-bold italic">
            {car.currency} {car.price}
          </span>
        </div>
      </div>
    </div>
  );
}
