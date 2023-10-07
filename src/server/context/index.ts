import { inferAsyncReturnType } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";

// export const createContext = async ({
//   req,
//   res,
// }: trpcNext.CreateNextContextOptions) => {
//   const getUserFromHeader = async () => {
//     if (req.headers.authorization) {
//       const user = await lorem();
//       return user;
//     }
//     return null;
//   };

//   const user = await getUserFromHeader();

//   return { user };
// };

export type Context = inferAsyncReturnType<typeof createContext>;
