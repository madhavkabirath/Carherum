"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const initialValues = {
    email: "",
    password: "",
    confirmpassword: "",
  };
  const [formvalue, setFormValue] = useState(initialValues);

  const onSubmitHanlder = (e) => {
    e.preventDefault();
    console.log(formvalue);
  };

  return (
    <div className="flex min-h-full  flex-col items-center px-6 py-12 lg:px-10">
      <div className=" flex min-h-60 w-2/4 flex-col justify-center bg-sky-100 ">
        <div className="mx-auto w-full max-w">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-600">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-2 mx-auto w-full max-w-sm">
          <form onSubmit={onSubmitHanlder} className="mx-2">
            <div className="my-2">
              <label
                for="email"
                className="block text-sm  font-medium leading-6 text-gray-600"
              >
                Email address
              </label>
              <div className="">
                <input
                  id="email"
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

            <div>
              <div className="flex items-center  justify-between">
                <label
                  for="password"
                  className="block text-sm  font-medium leading-6 text-gray-600"
                >
                  Password
                </label>
              </div>
              <div className="">
                <input
                  id="password"
                  placeholder="New Password"
                  name="password"
                  type="password"
                  value={formvalue.password}
                  onChange={(e) =>
                    setFormValue({ ...formvalue, password: e.target.value })
                  }
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex item-center justify-between pt-3">
                <label className="block text-sm font-medium leading-6 text-gray-600">
                  Confirm password
                </label>
              </div>
              <div className="">
                <input
                  type="password"
                  placeholder="Confirm password"
                  value={formvalue.confirmpassword}
                  onChange={(e) =>
                    setFormValue({
                      ...formvalue,
                      confirmpassword: e.target.value,
                    })
                  }
                  className="block w-full py-1.5 rounded text-gray-900 "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 mt-3 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div className="items-center py-2">
              <Link
                className="flex w-full rounded-md bg-gray-600 px-3 py-2  justify-center"
                href="/login"
              >
                Visit Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
