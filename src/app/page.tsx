"use client";

import { useSearchParams } from "next/navigation";
import CardList from "./components/CardList/CardList";
import FIlter from "./components/Filter/Filter";

import Paginator from "./components/Paginator/Paginator";
import { useEffect, useState } from "react";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const sort = searchParams.get("sort") ?? "";
  const order = searchParams.get("order") ?? "";

  const getCars = async function getData({
    page,
    sort,
    order,
  }: {
    page: string;
    sort: string;
    order: string;
  }): Promise<void> {
    setIsLoading(true);
    const res = await fetch(
      `https://testing-api.ru-rating.ru/cars?_limit=12&_page=${page}&_sort=${sort}&_order=${order}`
    );

    const data = await res.json();
    setCars(data.data);
    setTotalPage(data.meta.count);
    setIsLoading(false);
  };

  useEffect(() => {
    getCars({ page, sort, order });
  }, [page, sort, order]);

  return (
    <div className="h-screen flex flex-col p-3 gap-2">
      <FIlter />
      {isLoading ? (
        <div className="container mx-auto px-4 py-12 h-full flex justify-center items-center">
          Загрузка...
        </div>
      ) : (
        <CardList cars={cars} />
      )}
      <Paginator total={totalPage} />
    </div>
  );
}
