import cn, { Argument, Mapping } from 'classnames';
import React from 'react';


type IconName = "verify" | "connect"

const icons  = {
  verify: `M8 0C6.87133 0 5.87807 0.563875 5.27474 1.42188C4.24141 1.24188 3.14175 1.54575 2.34375 2.34375C1.54575 3.14175 1.24188 4.24207 1.42188 5.27474C0.563875 5.87807 0 6.87133 0 8C0 9.12867 0.563875 10.1219 1.42188 10.7253C1.24188 11.7586 1.54575 12.8583 2.34375 13.6563C3.14175 14.4543 4.24207 14.7581 5.27474 14.5781C5.87807 15.4361 6.87133 16 8 16C9.12867 16 10.1219 15.4361 10.7253 14.5781C11.7586 14.7581 12.8583 14.4543 13.6563 13.6563C14.4543 12.8583 14.7581 11.7579 14.5781 10.7253C15.4361 10.1219 16 9.12867 16 8C16 6.87133 15.4361 5.87807 14.5781 5.27474C14.7581 4.24141 14.4543 3.14175 13.6563 2.34375C12.8583 1.54575 11.7579 1.24188 10.7253 1.42188C10.1219 0.563875 9.12867 0 8 0ZM12 4.66667C12.1705 4.66667 12.341 4.73165 12.4714 4.86198C12.732 5.12265 12.732 5.54402 12.4714 5.80469L7.43099 10.8451C7.30566 10.9704 7.1363 11.0404 6.95964 11.0404C6.78297 11.0404 6.61295 10.9704 6.48828 10.8451L4.1862 8.54297C3.92553 8.2823 3.92553 7.86093 4.1862 7.60026C4.44686 7.33959 4.86824 7.33959 5.12891 7.60026L6.95964 9.43099L11.5286 4.86198C11.659 4.73165 11.8295 4.66667 12 4.66667Z`,
  connect: <path d="M8 0C3.58317 0 0 3.58317 0 8C0 12.4168 3.58317 16 8 16C12.4168 16 16 12.4168 16 8C16 3.58317 12.4168 0 8 0ZM7.58317 14.4128V9.39479H4.79359L8.8016 1.58717V6.60521H11.487L7.58317 14.4128Z" />
  

};

const Icon = (props: {
  size?: any;
  fill?: any;
  view?: any;
  className?:
    | string
    | number
    | boolean
    | Mapping
    | Argument[]
    | null
    | undefined;
  name: IconName;
}) => {
  const size = props.size ? props.size : 16;
  const fill = props.fill ? props.fill : `inherit`;
  const view = props.view ? props.view : `0 0 16 16`;
  const path = icons[props.name];
  return (
    <svg
      className={cn(props.className)}
      width={size}
      height={size}
      viewBox={view}
      fill={fill}
    >
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {typeof path === "string" && <path d={path}></path>}
      {typeof path !== "string" && path}
      
      <defs>
        
      </defs>
    </svg>
  );
};

export default Icon;
