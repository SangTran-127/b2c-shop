import { Avatar, AvatarFallback, AvatarImage } from "@/ui-components/ui/avatar";
// import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";
import Register from "@/components/Register";
import Carousel from "@/components/carousel";

export default async function Home() {
  const users = await serverClient.user.getAllUser();
  //    ^?

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Carousel />
      {/* <button onClick={() => handleClick()}>Click me</button> */}
    </main>
  );
}
