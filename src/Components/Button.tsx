import React, { PropsWithChildren } from "react";

interface IButtonProps {
    onClick: (event: React.MouseEvent) => void;
}

export default function Button(props: PropsWithChildren<IButtonProps>){
    return <button onClick={props.onClick}>{props.children}</button>
}