/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
          rose: colors.rose,
        },
      },
    },
  }
  ```
*/
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const actions = [
  {
    title: "Mobile Tani ",
    text:'Developing the Mobile Farmer Application, Mobile Farmer is software operated through a mobile application with an internet connection to facilitate the buying and selling process of agricultural products for the community in Indonesia, making it more convenient',
    href: "#",
    icon: "/images/projects/logo.png",
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Weecan",
    text:'An application developed to assist individuals with speech disabilities and non-disabled individuals to communicate through an app.',
    href: "#",
    icon: "/images/projects/weecan.png",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Skin Detective",
    text:'Developing Mobile App with machine learning algorithms, offers users a quick and reliable method to identify potential skin disease using just their smartphones.',
    href: "#",
    icon: "/images/projects/Skin.png",
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Indonesia Biru Mobile APP",
    text:'Developed Android app for diving spots in Lombok region, promoting marine conservation and boosting diving tourism.',
    href: "#",
    icon: "/images/experience/ibf.png",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Indonesia Biru Company Profile Web",
    text:'Managed web company profile and content on the website https://indonesiabiru.id',
    href: "#",
    icon: "/images/experience/ibf.png",
    iconForeground: "text-yellow-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Prediction Model NBA ",
    text:'Predicting the results of NBA basketball games is important for both fans and team management staff. This study aims to predict NBA basketball game outcomes using a multivariate quadratic polynomial method and compare it with standard linear regression.',
    href: "#",
    icon: "/images/projects/data.png",
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Model Polution In Jakarta ",
    text:'This research report utilizes Standard Air Pollution Index data in the DKI Jakarta Province in 2016 to 2018 to perform Data Analysis and Logistic Regression Prediction.',
    href: "#",
    icon: "/images/projects/data_anal.png",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Tools Analitic Mobile Legened",
    text:'This is an analysis tool for Mobile Legends: Bang Bang matches. This tool assists in highlighting key events in the game, such as team fights, turret attacks, and more',
    href: "#",
    icon: "/images/projects/data_lytic.png",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
      <div className="rounded-lg bg-gray-200 dark:bg-slate-600 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none "
                : "",
              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
              actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
              actionIdx === actions.length - 1
                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                : "",
              "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 dark:bg-cus-blue-100"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "rounded-lg inline-flex p-3 ring-4 ring-white"
                )}
              >
                <img src={action.icon} className="h-12 w-full " aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium dark:text-white">
                <div  className="focus:outline-none">
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </div>
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-white">
               {action.text}
              </p>
            </div>
            {/* <span
              className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
}
