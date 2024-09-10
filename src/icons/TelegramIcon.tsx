import React from "react";
import { IconsProps } from "@/icons/index";

const TelegramIcon = ({ height = 30, width = 30 }: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dii_31_1568)">
        <path
          d="M23.2097 5.14974C23.2097 5.14974 25.1523 4.41555 24.9904 6.19859C24.9364 6.9328 24.4507 9.50241 24.073 12.2819L22.778 20.5153C22.778 20.5153 22.6701 21.7215 21.6987 21.9313C20.7273 22.1411 19.2704 21.1971 19.0006 20.9873C18.7847 20.83 14.9534 18.4701 13.6043 17.3163C13.2265 17.0017 12.7948 16.3724 13.6582 15.6382L19.3243 10.394C19.9718 9.76465 20.6194 8.29631 17.9213 10.0793L10.3665 15.0614C10.3665 15.0614 9.50314 15.5858 7.88429 15.1138L4.37671 14.0649C4.37671 14.0649 3.08161 13.2783 5.29407 12.4917C10.6903 10.0269 17.3277 7.5096 23.2097 5.14974Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dii_31_1568"
          x="0.769231"
          y="5"
          width="27.4615"
          height="23.423"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.23077" />
          <feGaussianBlur stdDeviation="1.61538" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.823529 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31_1568"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_1568"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.23077" />
          <feGaussianBlur stdDeviation="1.61538" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.909804 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_31_1568"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3.23077" />
          <feGaussianBlur stdDeviation="1.61538" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_innerShadow_31_1568"
            result="effect3_innerShadow_31_1568"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TelegramIcon;
