import { CelebrityCardType } from "@/types/types";
import React from "react";
import Image from "next/image";
import "./CelebCard.css";

const CelebCard = (data: CelebrityCardType) => {
  return (
    <div className="celebcard">
      <Image src={data.imageUrl} alt={data.name} width={150} height={150} />
      <h3>{data.name}</h3>
      <h4>{data.role}</h4>
    </div>
  );
};

export default CelebCard;
