import React, { PropsWithChildren } from "react";

interface IButtonProps {
  onClick?: (event: React.MouseEvent) => void;
  type: "button" | "submit" | "reset" | undefined;
  disabled: boolean;
}

export default function Button(props: PropsWithChildren<IButtonProps>) {
  return (
    <button onClick={props.onClick} type={props.type} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
