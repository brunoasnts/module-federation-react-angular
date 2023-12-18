import React from "react";

type ButtonProps = {
  onClick?: () => void;
};

export const Button = ({ onClick }: ButtonProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <button className="bg-orange p-3.5 rounded-md text-white" onClick={() => {
      setCount(count + 1);
      if (onClick) {
        onClick();
      }
    }}>
      Button {count}
    </button>
  );
};
