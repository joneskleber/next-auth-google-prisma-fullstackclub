// import { prismaClient } from "@/lib/prisma";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

// export default NextAuth({
//   adapter: PrismaAdapter(prismaClient),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// });
// esse código foi para o arquivo auth.ts dentro do diretório src/lib

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
