import { useRouter, useSearchParams } from "next/navigation";

export default function FIlter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const order = searchParams.get("order") ?? "";

  const updateFilter = (sort: "price" | "", order: "asc" | "desc" | "") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort);
    params.set("order", order);
    router.push(`?${params.toString()}`);
  };

  return (
    <select
      className="fixed z-2 bg-white p-2 outline-none border-none shadow-lg text-black shadow-blue-500/50"
      value={order}
      onChange={(e) => {
        const value = e.target.value as "asc" | "desc" | "";
        updateFilter(value ? "price" : value, value);
      }}
    >
      <option value="">Нет фильтра</option>
      <option value="asc">По возрастанию цены</option>
      <option value="desc">По убыванию цены</option>
    </select>
  );
}
