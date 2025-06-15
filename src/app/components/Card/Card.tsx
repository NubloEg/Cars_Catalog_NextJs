import Image from "next/image";
import React, { Fragment } from "react";

interface Props {
  id: number;
  title: string;
  img: string;
  price: number;
  availability: string;
  currency: "RUB";
  drive: "Задний" | "Передний";
  color: string;
}

export default function Card(car: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={car.img}
          unoptimized
          fill
          alt={car.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{car.title}</h3>

        <ul className="space-y-1">
          {[car.availability, car.drive, car.color].map((info, index) => (
            <Fragment key={index + car.id}>
              {info ? (
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600 text-sm">{info}</span>
                </li>
              ) : null}
            </Fragment>
          ))}
        </ul>
        <div className="text-end">
          <span className="text-gray-400 text-sm text-bold italic">
            {car.currency} {car.price}
          </span>
        </div>
      </div>
    </div>
  );
}
