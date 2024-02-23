// import { NewUser, users } from "@/db/schema/users";
// import { db } from "../..";
// import { router, publicProcedure } from "../../trpc";
// import { z } from "zod";

// const newUsers: NewUser[] = [
//   {
//     name: "Guillermo Rauch",
//     email: "rauchg@vercel.com",
//     image:
//       "https://pbs.twimg.com/profile_images/1576257734810312704/ucxb4lHy_400x400.jpg",
//   },
//   {
//     name: "Lee Robinson",
//     email: "lee@vercel.com",
//     image:
//       "https://pbs.twimg.com/profile_images/1587647097670467584/adWRdqQ6_400x400.jpg",
//   },
//   {
//     name: "Steven Tey",
//     email: "stey@vercel.com",
//     image:
//       "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
//   },
// ];

// export const userRouter = router({
//   getAllUser: publicProcedure.query(async () => {
//     return await db.select().from(users);
//   }),
//   register: publicProcedure
//     .input(
//       z.object({
//         username: z.string(),
//         password: z.string(),
//       })
//     )
//     .mutation((opts) => {
//       console.log(opts);
//     }),
//   // addUsers: publicProcedure.mutation(async () => {
//   //   return await db.insert(users).values(newUsers);
//   // }),
// });
