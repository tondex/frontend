import "./HeaderMore.scss";

import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

function HeaderMore() {
  const [isVisible, setVisible] = useState(false);

  function href(path: string) {
    if (path === "docs") window.open("https://google.com", "_blank");
    if (path === "Github")
      window.open("https://github.com/snuff-dogg/tondex", "_blank");
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setVisible(false);
      }}
    >
      <button
        className="btn action-btn header-btn more"
        onClick={() => setVisible(!isVisible)}
      >
        <svg
          width="36"
          height="8"
          viewBox="0 0 36 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#41444E" />
          <circle cx="18" cy="4" r="4" fill="#41444E" />
          <circle cx="32" cy="4" r="4" fill="#41444E" />
        </svg>
        {isVisible ? (
          <div className="more-dropdown">
            <a
              href="https://github.com/snuff-dogg/tondex"
              target="_blank"
              className="more-link"
              rel="noreferrer"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 0C3.80588 0 0 3.86547 0 8.63309C0 12.6784 2.74267 16.0633 6.44017 17C6.4005 16.8835 6.375 16.7482 6.375 16.5806V15.105C6.03004 15.105 5.45204 15.105 5.30683 15.105C4.72529 15.105 4.20821 14.8511 3.95746 14.3791C3.67908 13.8547 3.63092 13.0525 2.941 12.5619C2.73629 12.3986 2.89212 12.2122 3.128 12.2374C3.56362 12.3626 3.92487 12.6662 4.26487 13.1165C4.60346 13.5676 4.76283 13.6698 5.39537 13.6698C5.70208 13.6698 6.16108 13.6518 6.59317 13.5827C6.8255 12.9835 7.22712 12.4317 7.718 12.1712C4.8875 11.8755 3.53671 10.4453 3.53671 8.5036C3.53671 7.66763 3.88733 6.85899 4.48304 6.1777C4.28754 5.50144 4.04175 4.1223 4.55813 3.59712C5.83171 3.59712 6.60167 4.43597 6.78654 4.66259C7.42121 4.44173 8.11821 4.31655 8.85063 4.31655C9.58446 4.31655 10.2843 4.44173 10.9204 4.66403C11.1031 4.43885 11.8738 3.59712 13.1502 3.59712C13.6687 4.12302 13.4201 5.50791 13.2225 6.18273C13.8146 6.86259 14.1631 7.66906 14.1631 8.5036C14.1631 10.4439 12.8145 11.8734 9.98821 12.1705C10.766 12.5827 11.3333 13.741 11.3333 14.6137V16.5806C11.3333 16.6554 11.317 16.7094 11.3085 16.7734C14.6207 15.5942 17 12.4 17 8.63309C17 3.86547 13.1941 0 8.5 0Z"
                  fill="#BBBBBB"
                />
              </svg>
              <span className="more-link-text">GitHub</span>
            </a>
          </div>
        ) : null}
      </button>
    </OutsideClickHandler>
  );
}

export default HeaderMore;
