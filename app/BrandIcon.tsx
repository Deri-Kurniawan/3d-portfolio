import React from "react";

export default function BrandIcon() {
  return (
    <>
      <style jsx>{`
            #brand path {
              @apply transition-all duration-500 ease-in-out;
              stroke-dasharray: 500;
              stroke-dashoffset: 500;
              animation: animate 8s ease-in-out forwards infinite;
            }

            @keyframes animate {
              0% {
                stroke-dashoffset: 0;
                stroke-dasharray: 500;
              }
              50% {
                stroke-dashoffset: 500;
                stroke-dasharray: 100;
              }
              100% {
                stroke-dashoffset: 0;
                stroke-dasharray: 500;
              }
            }

            #brand stop:nth-child(1) {
              animation: gradient 4s ease infinite alternate;
            }

            #brand stop:nth-child(2) {
              animation: gradient 4s ease infinite;
            }

            @keyframes gradient {
              0% {
                stop-color: #A293FF;
              }
              50% {
                stop-color: #00F0FF;
              }
              100% {
                stop-color: #A293FF;
              }
            }

            #brand:hover > * {
                animation-play-state: paused;
            }
            `}</style>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="50"
        fill="none"
        viewBox="0 0 42 50"
        id="brand"
      >
        <path
          fill="url(#paint0_linear_90_16)"
          d="M22.989 2.46v46.292l5.747-3.953V17.55l6.437 4.278v18.017c1.916-2.102 5.747-5.584 5.747-9.684v-8.333l-4.138-3.049 4.138-2.13V2.46c0-1.16-.23-1.26-1.61-1.26h-4.137v14.547l-6.437-4.504V1.2h-4.368c-.92 0-1.38.239-1.38 1.26z"
        ></path>
        <path
          stroke="#000"
          strokeWidth="0.5"
          d="M40.92 30.16c0 4.1-3.831 7.582-5.747 9.684V21.827l-6.437-4.279V44.8l-5.747 3.952V2.46c0-1.021.46-1.26 1.379-1.26h4.368v10.043l6.437 4.504V1.2h4.138c1.38 0 1.609.1 1.609 1.26v14.188l-4.138 2.13 4.138 3.05m0 8.332v-8.333m0 8.333v-8.333"
        ></path>
        <path
          fill="url(#paint1_linear_90_16)"
          fillRule="evenodd"
          d="M.96 2.898v28.083c0 3.095 6.76 13.381 18.984 17.917v-46c0-.907 0-1.814-1.852-1.814-.694 0-11.421-.076-15.743 0-.694 0-1.389.726-1.389 1.814zM7.211 29.62V5.352h5.325c1.482 0 1.852 1.21 1.852 1.815v31.698c-3.89-2.178-7.177-7.07-7.177-9.245z"
          clipRule="evenodd"
        ></path>
        <path
          stroke="#000"
          strokeWidth="0.5"
          d="M7.211 5.352V29.62c0 2.175 3.287 7.067 7.177 9.244V7.168c0-.605-.37-1.815-1.852-1.815m-5.325 0h5.325m-5.325 0h5.325M.96 2.898v28.083c0 3.095 6.76 13.381 18.984 17.917v-46c0-.907 0-1.814-1.852-1.814-.694 0-11.421-.076-15.743 0-.694 0-1.389.726-1.389 1.814z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_90_16"
            x1="2.522"
            x2="46.64"
            y1="24.976"
            y2="24.976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A293FF"></stop>
            <stop offset="1" stopColor="#00F0FF"></stop>
          </linearGradient>
          <linearGradient
            id="paint1_linear_90_16"
            x1="-1.028"
            x2="40.555"
            y1="24.976"
            y2="24.976"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A293FF"></stop>
            <stop offset="1" stopColor="#00F0FF"></stop>
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
