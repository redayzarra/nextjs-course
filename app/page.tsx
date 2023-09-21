"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import girl from "@/public/images/shorthair.jpg";
import { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./components/HeavyComponent"));

export default function Home() {
  // const session = await getServerSession(authOptions);

  const [isVisible, setVisible] = useState(false);

  return (
    <main className="relative h-screen">
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}

      <h1>Hello World</h1>

      <Image src={girl} alt="A female model with short hair" />

      <button onClick={() => setVisible(!isVisible)}>Show</button>
      {isVisible && <HeavyComponent />}

      {/* <Image
        src="https://bit.ly/react-cover"
        alt="cover of React course"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      /> */}
    </main>
  );
}

export const metadata: Metadata = {
  title: "HomePage",
  description: "...",
};
