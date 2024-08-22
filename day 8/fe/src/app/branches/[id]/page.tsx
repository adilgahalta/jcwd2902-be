/** @format */

import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params: { id } }: Props) {
  const res = await fetch("http://localhost:8000/branches/" + id);
  const { data } = await res.json();
  console.log(data);
  return (
    <div>
      {data.id} {data.name} {data.location}
    </div>
  );
}
