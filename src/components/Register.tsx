"use client";
import { trpc } from "../app/_trpc/client";
export default function Register() {
  const register = trpc.user.register.useMutation();
  return (
    <div>
      <h1>hello</h1>
      <button
        onClick={() => register.mutate({ username: "sang", password: "123" })}
      >
        Register
      </button>
    </div>
  );
}
