import React from "react";

type ButtonProps = {
  onClick?: () => void;
};

export const Button = ({ onClick }: ButtonProps) => {
  const [count, setCount] = React.useState(0);

  return (
    <button style={{ color: 'red' }} onClick={() => {
      setCount(count + 1);
      if (onClick) {
        onClick();
      }
    }}>
      Button {count}
    </button>
  );
};
