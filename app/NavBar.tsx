"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-200 p-5 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users" className="mr-5">
        Users
      </Link>
      <Link href="/admin" className="mr-5">
        Admin
      </Link>
      <Link href="/upload" className="mr-5">
        Upload
      </Link>

      {status == "unauthenticated" && (
        <Link href="/api/auth/signin" className="mr-5">
          Sign In
        </Link>
      )}

      {status == "authenticated" && (
        <div>
          {session.user!.name}
          <Link href="/api/auth/signout" className="mr-5 ml-3">
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
