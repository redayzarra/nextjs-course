import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Image from "next/image";
import girl from "@/public/images/shorthair.jpg";

export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      <ProductCard /> */}

      <Image src={girl} alt="A female model with short hair" />

      <Image
        src="https://bit.ly/react-cover"
        alt="cover of React course"
        width={300}
        height={170}
      />
    </main>
  );
}
