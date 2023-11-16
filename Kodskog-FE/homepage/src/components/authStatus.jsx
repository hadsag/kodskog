"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";


async function keycloakSessionLogOut() {
    try {
      await fetch(`/api/auth/logout`, { method: "GET" });
    } catch (err) {
      console.error(err);
    }
}

export default function AuthStatus() {
  const { data: session, status } = useSession(); 

  useEffect(() => {
    
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);


  if (status == "loading") {
    return (
      <button
      className="text-white  border border-[#a49382] font-bold uppercase text-xs px-2 py-1 rounded outline-none focus:outline-none align-middle ease-linear transition-all duration-150"
      onClick={() => signIn("OakAuth")}>
      Login
    </button>
    );
  } else if (session) {
    return (
      <button
        className="text-white  border border-[#a49382] font-bold uppercase text-xs px-2 py-1 rounded outline-none focus:outline-none align-middle ease-linear transition-all duration-150"
        onClick={() => {
          keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
        }}>
        Log out
      </button>
    );
  }
  
  return (
    <button
      className="text-white  border border-[#a49382] font-bold uppercase text-xs px-2 py-1 rounded outline-none focus:outline-none align-middle ease-linear transition-all duration-150"
      onClick={() => signIn("keycloak")}>
      Login
    </button>
  );
}