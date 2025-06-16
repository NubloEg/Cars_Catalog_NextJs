import { Car } from "../types/car-types";

export interface Data {
  unique_id: number;
  mark_id: string;
  folder_id: string;
  images: { image: string[] };
  price: number;
  availability: string;
  currency: "RUB";
  drive: "Задний" | "Передний";
  color: string;
  gearbox: string;
  owners_number: string;
  state: string;
}

export function converterDataToCar(data: Data[]): Car[] {
  return data.map((car) => {
    const newCar: Car = {
      id: car.unique_id,
      title: car.mark_id + car.folder_id,
      img: car.images.image[0],
      availability: car.availability,
      currency: car.currency,
      price: car.price,
      state: car.state,
      info: {
        color: car.color,
        drive: car.drive,
        gearbox: car.gearbox,
        ownersNumber: car.owners_number,
      },
    };

    return newCar;
  });
}
