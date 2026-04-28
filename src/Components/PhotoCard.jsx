import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";

const PhotoCard = ({ photo }) => {
  return (
    <Card className="">
      <div className="space-y-5 mt-5">
        <div className="relative aspect-square w-full">
          <Image src={photo.imageUrl} fill alt="photo" className="rounded-2xl object-cover"/>

          <Chip className="absolute right-2 top-2">{photo.category}</Chip>
        </div>


        <h2>{photo.title}</h2>

        <div className="flex items-center justify-center">
          <Button variant="secondary" className="w-full">View Details</Button>
        </div>
      </div>
    </Card>
  );
};

export default PhotoCard;
