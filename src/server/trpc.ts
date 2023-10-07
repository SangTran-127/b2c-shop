import { initTRPC } from "@trpc/server";
type Context = {
  // user is nullable
  user?: {
    id: string;
  };
};

const t = initTRPC.context<Context>().create();

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
