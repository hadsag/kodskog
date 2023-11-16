import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Button from "../components/Button";
import TextBox from "../components/TextBox";
import RootLayout from "../app/layout";

export default function LoginPage(props) {
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

  const onSubmit = async () => {
    const result = await signIn("OakAuth", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (result && result.error) {
      console.error("Login error:", result.error);
    } else {
      router.push(callbackUrl || "/"); // Provide a default URL if callbackUrl is undefined
    }
  };

  return (
    <RootLayout>
      <div id="projects" className="w-full">
        <div className="w-screen h-screen relative">
          <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br gap-1">
            <div className="px-7 py-4 shadow-xl bg-white rounded-xl flex flex-col gap-2 group hover:transform hover:scale-105 hover:shadow-2xl transition-transform">
              <TextBox
                labelText="User Name"
                onChange={(e) => (userName.current = e.target.value)}
              />
              <TextBox
                labelText="Password"
                type={"password"}
                onChange={(e) => (pass.current = e.target.value)}
              />
              <Button onClick={onSubmit}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
