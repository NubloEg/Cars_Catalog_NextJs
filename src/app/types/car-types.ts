export interface Car {
  id: number;
  title: string;
  img: string;
  price: number;
  currency: "RUB";
  availability: string;
  state: string;
  info: {
    drive: "Задний" | "Передний";
    color: string;
    gearbox: string;
    ownersNumber: string;
  };
}
