import { Avatar, AvatarFallback, AvatarImage } from "@/ui-components/ui/avatar";
// import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";
import Register from "@/components/Register";
import Carousel from "@/components/carousel";
import { AspectRatio } from "@/ui-components/ui/aspect-ratio";
import Image from "next/image";
import IntroSection from "@/components/section/intro/intro";
import CategorySection from "@/components/section/category/category";

export default async function Home() {
  // const users = await serverClient.user.getAllUser();
  //    ^?

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-4">
      <IntroSection />
      <CategorySection />
      {/* <Carousel /> */}
      {/* <button onClick={() => handleClick()}>Click me</button> */}
    </main>
  );
}
