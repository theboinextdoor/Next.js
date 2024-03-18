"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
// import { axios } from "axios";


export default function LogInPage() {

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleOnLogIn = async () => {};
  return (
 
  <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white " >
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
       className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" >
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
            placeholder="eg. theboynextdoor"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={user.email}
              className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>setUser({...user, email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={user.password}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>setUser({...user, password: e.target.value })}
            />
          </div>
        </div>

        <div>
          <button
           onClick={handleOnLogIn}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-md text-gray-500">
        Not a member?{' '}
        <Link href="/signup" className="text-blue-400 font-semibold"> Sign up</Link>
      </p>
    </div>
  </div>

  )
}
