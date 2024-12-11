import "next-auth";

declare module "next-auth" {
  interface User {
    _id?: string;
    username?: string;
    isVerified: boolean;
    role: string;
  }
  interface Session {
    user: {
      _id?: string;
      username?: string;
      isVerified: boolean;
      role: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    _id?: string;
    username?: string;
    isVerified: boolean;
    role: string;
  }
}
