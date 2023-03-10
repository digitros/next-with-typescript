import React, { useState } from "react";
import Head from "next/head";

import { LazyImage } from "@/components/LazyImage";

// generate a random number between 1 and 123
const randomNumber = () => Math.floor(Math.random() * 123) + 1;

//generate unique id
const generateId = () => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<IImageItem[]>([]);

  const addNewFox: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newFox: IImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomNumber()}.jpg`,
    };

    setImages([...images, newFox]);
  };

  return (
    <>
      <Head>
        <title>React with Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addNewFox}
        >
          Add Fox
        </button>
        {images.map((image) => (
          <div key={image.id} className="p-4">
            <LazyImage
              src={image.url}
              width={320}
              height="auto"
              className="rounded-r bg-gray-300"
              onClick={() => console.log("hello")}
              onLazyLoad={(img) => console.log(img)}
            />
          </div>
        ))}
      </main>
    </>
  );
}
