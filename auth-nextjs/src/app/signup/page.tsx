"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  const handleOnSignup = async () => {};
  return (
    <div className="bg-white flex flex-col items-center justify-center min-h-screen ">
      <form className="relative space-y-3 rounded-xl bg-gray-200 p-6 shadow-xl lg:p-10 border border-gray-300 m-10 ">
        <h1 className="text-xl text-black font-semibold lg:text-3xl">SignUp</h1>

        <div>
          <label className="text-black "> Username </label>
          <input
            id="username"
            type="text"
            placeholder="eg. theboynextdoor "
            className="mt-2 h-12 text-black w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
          />
        </div>
        <div className="text-black">
          <label className=""> Email Address </label>
          <input
            id="email"
            type="email"
            value={user.email}
            placeholder="Info@example.com"
            className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            onChange={(e)=>setUser({...user, email: e.target.value })}

          />
        </div>
        <div>
          <label className="text-black"> Password </label>
          <input
            id="password"
            type="password"
            className="mt-2 text-black h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
            value={user.password}
            onChange={(e) => setUser({...user , password: e.target.value})}
          />
        </div>

        <div>
          <button
            type="button"
            className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
            onClick={handleOnSignup}
          >
           Sign Up
          </button>
        </div>
        <div className="text-black flex items-center justify-center ">
          <p>Alreay have an account? </p>
          <Link href="/login"><p className="text-blue-400 cursor-pointer">Log In</p></Link>
        </div>
      </form>
    </div>
  );
}
