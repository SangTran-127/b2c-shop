// import { TRPCError } from "@trpc/server";
// import { middleware, publicProcedure } from "../trpc";

// const isAuth = middleware((opts) => {
//   const { ctx } = opts;
//   if (!ctx.user) {
//     throw new TRPCError({ code: "UNAUTHORIZED" });
//   }
//   return opts.next({
//     ctx: {
//       user: ctx.user,
//     },
//   });
// });

// export const protectedProcedure = publicProcedure.use(isAuth);
