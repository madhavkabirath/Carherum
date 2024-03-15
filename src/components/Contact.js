"use client"
import { useState } from "react";

export default function Contact() {

  const initialValues={
    fname:"",
    Lname:"",
    company:"",
    email:"",
    message:"",
    phone:"",
  };
   const [formvalue, setFormValue]=useState(initialValues);

   const onSubmitHandler =(e) => {
    e.preventDefault();
    console.log(formvalue);
    setFormValue({
    fname:"",
    Lname:"",
    company:"",
    email:"",
    message:"",
    phone:"",
    });
   }


  return (
    <div className="isolate bg-gray px-6 py-24   lg:px-8">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white-900">
          Contact sales
        </h2>
        <p className="mt-2 text-lg leading-8 text-white-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form onSubmit={onSubmitHandler} className="mx-auto max-w-xl mt-20">
        <div className="grid  gap-x-8 gap-y-6 grid-cols-2">
          <div>
            <label
              for="first-name"
              className="block text-sm font-semibold leading-6 text-white-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                value={formvalue.fname}
                onChange={(e) => setFormValue({...formvalue,fname:e.target.value})}
                autocomplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              />
            </div>
          </div>
          <div>
            <label
              for="last-name"
              className="block text-sm font-semibold leading-6 text-white-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                value={formvalue.Lname}
                onChange={(e) => setFormValue({...formvalue,Lname:e.target.value})}
                autocomplete="family-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              for="company"
              className="block text-sm font-semibold leading-6 text-white-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                value={formvalue.company}
                onChange={(e) => setFormValue({...formvalue, company :e. target.value})}
                autocomplete="organization"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              for="email"
              className="block text-sm font-semibold leading-6 text-white-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                value={formvalue.email}
                onChange={(e) => setFormValue({...formvalue, email: e.target.value})}
                autocomplete="email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              for="phone-number"
              className="block text-sm font-semibold leading-6 text-white-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              {/* <div className="absolute inset-y-0 left-0 flex items-center">
                <label for="country" className="sr-only">
                  Country
                </label> */}

                {/* <svg
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                > */}
                  {/* <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg> */}
              {/* </div> */}
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                value={formvalue.phone}
                onChange={(e) => setFormValue({...formvalue, phone: e.target.value})}
                autocomplete="tel"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label
              for="message"
              className="block text-sm font-semibold leading-6 text-white-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formvalue.message}
                onChange={(e) => setFormValue({...formvalue, message: e.target.value})}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
              ></textarea>
            </div>
          </div>
          {/* <div className="flex gap-x-4 col-span-2">
            <div className="flex h-6 items-center">
              <button
                type="button"
                className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                role="switch"
                aria-checked="false"
                aria-labelledby="switch-1-label"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                ></span>
              </button>
            </div>
            <label
              className="text-sm leading-6 text-gray-600"
              id="switch-1-label"
            >
              By selecting this, you agree to our
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </label>
          </div> */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
