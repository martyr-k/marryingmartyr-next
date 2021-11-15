import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return [toggle, handleClick];
};

export default useToggle;
