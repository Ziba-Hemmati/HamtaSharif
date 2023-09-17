"use client";
import { useState, useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import axios from "axios";
import Loading from "../../components/Loading";

const Login = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold">Hamta Sharif Login</h2>
      <br />
      <br />
      {profile.id ? (
        <>
          <Loading />
          {router.push("/dashboard")}
        </>
      ) : (
        <button
          onClick={() => login()}
          className="border border-blue-300 rounded-md p-2 hover:text-gray-400 hover:bg-gray-950 transition-colors duration-300"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default Login;
