"use client";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2>Hamta Sharif Login</h2>
      <br />
      <br />
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
};

export default Login;
