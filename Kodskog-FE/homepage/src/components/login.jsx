import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Button from "./Button";
import TextBox from "./TextBox";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const { data: session, status } = useSession();

  useEffect(() => {
    if (
      status !== "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  const onSubmit = async () => {
    const result = await signIn("OakAuth", {
      username,
      password,
      redirect: false,
    });

    if (result && result.error) {
      console.error("Login error:", result.error);
    } else {
      // Replace "/dashboard" with the desired destination URL
      router.push(callbackUrl || "/"); // Provide a default URL if callbackUrl is undefined
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1">
      <div className="px-7 py-4 shadow-xl bg-white rounded-xl flex flex-col gap-2 group hover:transform hover:scale-105 hover:shadow-2xl transition-transform">
        <TextBox
          labelText="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextBox
          labelText="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Login</Button>
      </div>
    </div>
  );
}
