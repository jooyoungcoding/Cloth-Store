import React from "react";

interface ButtonProps {
  text?: string; // Text to display on the button
  bgColor?: string; // Background color of the button
  textColor?: string; // Text color of the button
  icon?: React.ReactNode; // Optional icon to display
  iconColor?: string; // Icon color
  iconPosition?: "left" | "right"; // Position of the icon
  width?: string; // Width of the button
  height?: string; // Height of the button
  onClick?: () => void; // Click event handler
  href?: string; // Optional href to render as a link
  className?: string; // Custom class for styling
  borderRadius?: string; // Border radius of the button
  borderColor?: string; // Border color of the button
  border?: string; // Border style of the button
}

const Button: React.FC<ButtonProps> = ({
  text = "Button",
  bgColor = "#007BFF",
  textColor = "white",
  icon,
  iconColor = "white",
  iconPosition = "left",
  width = "auto",
  height = "auto",
  onClick,
  href,
  className,
  borderRadius = "0px",
  borderColor = "transparent",
  border = "none",
}) => {
  const commonStyles = {
    backgroundColor: bgColor,
    width: width,
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: border === "none" ? border : `${border} ${borderColor}`,
    borderRadius: borderRadius,
    padding: "8px 16px",
    color: textColor,
    cursor: "pointer",
    textDecoration: "none", // Ensure link styles are reset
  };

  const iconStyles = {
    color: iconColor,
  };

  if (href) {
    return (
      <a href={href} className={className} style={commonStyles}>
        {icon && iconPosition === "left" && (
          <span style={{ ...iconStyles, marginRight: text ? "8px" : "0" }}>
            {icon}
          </span>
        )}
        {text}
        {icon && iconPosition === "right" && (
          <span style={{ ...iconStyles, marginLeft: text ? "8px" : "0" }}>
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} style={commonStyles}>
      {icon && iconPosition === "left" && (
        <span style={{ ...iconStyles, marginRight: text ? "8px" : "0" }}>
          {icon}
        </span>
      )}
      {text}
      {icon && iconPosition === "right" && (
        <span style={{ ...iconStyles, marginLeft: text ? "8px" : "0" }}>
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;
