/** @format */

import { api, image_url } from "@/config/confg";
import { IExpense } from "@/interfaces/expense.interface";
import Image from "next/image";

export default async function Home() {
  const response = await api("/expenses");
  const { data } = (await response.json()) as { data: IExpense[] };
  return (
    <div className="flex flex-col items-center">
      {data.map((item: IExpense, key) => (
        <div key={key} className="flex gap-2">
          <h1>{item.title}</h1>
          <div>
            <Image
              width={200}
              height={200}
              src={image_url + item.image}
              className="w-[200] aspect-square"
              alt="image"
            />
          </div>
          <h1>{item.category}</h1>
          <h1>{item.type}</h1>
          <h1>{item.amount}</h1>
          <h1>{item.date}</h1>
        </div>
      ))}
    </div>
  );
}
