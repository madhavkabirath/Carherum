"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {  

  const initialValues = {
    email: "",
    password: "",
  };

  const [formvalue, setFormValue] = useState(initialValues);

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    console.log(formvalue);
  };

  return (
    <div className="flex min-h-full  items-center  flex-col justify-center px-6 py-12 lg:px-10">
      <div className="flex min-h-60  w-2/4 flex-col rounded-md justify-center bg-sky-100 ">
        <div className="mx-auto w-full max-w">
          <h2 className="top-20 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
            Login to to Your Account
          </h2>
        </div>

        <div className="flex min-h-full">
          <form
            className="mt-10 mx-auto w-full max-w-sm"
            onSubmit={onSubmitHanlder}
          >
            <div className="mt-5">
              <label
                for="email"
                className="block text-sm  leading-6 text-gray-700 text-bold "
              >
                Email address
              </label>
              <div className="">
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={formvalue.email}
                  onChange={(e) =>
                    setFormValue({ ...formvalue, email: e.target.value })
                  }
                  autocomplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                for="password"
                className="block text-sm font-medium leading-6 text-gray-700 text-bold"
              >
                Password
              </label>

              <div>
                <input
                  placeholder="Password"
                  className="justify-between block w-full rounded-md py-1.5 text-gray-900"
                  type="password"
                  value={formvalue.password}
                  onChange={(e) =>
                    setFormValue({ ...formvalue, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold leading-6 text-gray-100 text-bold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
            <div className="items-center pt-3 pb-4">
              <Link
                className="flex w-full rounded-md bg-gray-600 px-3 py-2 justify-center"
                href="/signup"
              >
                Visit Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
