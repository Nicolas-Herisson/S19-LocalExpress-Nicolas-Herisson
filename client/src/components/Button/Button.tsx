import { useState } from "react";
import "./Button.scss"

export default function Button({ 
    label, onClick, className, color="black", backgroundColor="white",
     hoverBgColor="black", hoverColor="white" }: ButtonProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);


    return (
        <button className={`className=button ${className}`} type="button" 
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        style={{ backgroundColor: isFocused ? hoverBgColor:backgroundColor, color: isFocused ? hoverColor:color }} onClick={onClick}>{label}</button>
    )
}

interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
    backgroundColor?: string;
    hoverBgColor?: string;
    color?: string;
    hoverColor?: string
}