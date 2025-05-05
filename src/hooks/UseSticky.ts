 
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;
}

const UseSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);

  const stickyHeader = (): void => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader , { passive: false });

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
  };
};

export default UseSticky;
