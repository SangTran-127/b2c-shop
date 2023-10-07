import { Avatar, AvatarFallback, AvatarImage } from "@/ui-components/ui/avatar";
// import TodoList from "./_components/TodoList";
import { serverClient } from "./_trpc/serverClient";
export default async function Home() {
  const users = await serverClient.user.getAllUser();
  //    ^?
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Data</h1>
      {users.map((user) => (
        <Avatar key={user.id}>
          <AvatarImage src={user.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
      {/* <TodoList initialTodos={users} /> */}
      <button>Click me</button>
    </main>
  );
}
