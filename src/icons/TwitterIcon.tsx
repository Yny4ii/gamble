import React from "react";
import { IconsProps } from "@/icons/index";

const TwitterIcon = ({ height = 30, width = 30 }: IconsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_31_1572)">
        <g filter="url(#filter0_dii_31_1572)">
          <path
            d="M19.5162 6.9231L22.1161 6.9231L16.4076 13.778L23.0769 23.0769L17.8432 23.0769L13.7455 17.4261L9.05438 23.0769L6.45447 23.0769L12.5021 15.7451L6.11536 6.9231L11.4791 6.9231L15.1811 12.0852L19.5162 6.9231ZM18.6062 21.4675L20.0475 21.4675L10.7217 8.47291L9.17307 8.47291L18.6062 21.4675Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dii_31_1572"
          x="2.88459"
          y="6.9231"
          width="23.4231"
          height="22.6153"
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
            result="effect1_dropShadow_31_1572"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_1572"
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
            result="effect2_innerShadow_31_1572"
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
            in2="effect2_innerShadow_31_1572"
            result="effect3_innerShadow_31_1572"
          />
        </filter>
        <clipPath id="clip0_31_1572">
          <rect
            width="29.0769"
            height="29.0769"
            fill="white"
            transform="translate(0.461548 0.461426)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TwitterIcon;
